import pytest
from unittest.mock import patch, Mock
from src.code_quality_functions import run_code_quality_checks, run_unit_tests
import subprocess


def test_run_unit_tests(mocker):
    # Given
    mock_test_file = "test_file.py"
    mock_src_folder = "/src"
    mock_cov_folder = "/cov"

    # Mock functions
    mocker.patch("os.chdir")
    mocker.patch("pytest.main", return_value=0)

    # When
    result = run_unit_tests(mock_test_file, mock_src_folder, mock_cov_folder)

    # Then
    pytest.main.assert_called_once_with(
        [
            mock_test_file,
            "-v",
            "-p",
            "no:cacheprovider",
            "--disable-pytest-warnings",
            "--cov=/cov",
            "--cov-report=term-missing",
        ]
    )
    assert result == 0


def test_run_unit_tests_failure(mocker):
    # Given
    mock_test_file = "test_file.py"
    mock_src_folder = "/src"

    # Mock functions
    mocker.patch("os.chdir")
    mocker.patch("pytest.main", return_value=1)
    mocker.patch("builtins.print")

    # When
    result = run_unit_tests(mock_test_file, mock_src_folder)

    # Then
    assert result is None
    pytest.main.assert_called_once()
    print.assert_called_with(
        "An error occurred while running tests: Tests failed. Please check."
    )


@pytest.mark.parametrize(
    "returncode, stdout, stderr, expected",
    [
        (0, "", "", None),
        (1, "flake8 error", "", "flake8 error"),
        (1, "", "black error", "black error"),
    ],
)
def test_run_code_quality_checks(returncode, stdout, stderr, expected):
    with patch("subprocess.run") as mock_subprocess_run:
        mock_subprocess_run.return_value = Mock(
            returncode=returncode, stdout=stdout, stderr=stderr
        )

        result = run_code_quality_checks("src_folder")
        assert result == expected
        assert mock_subprocess_run.call_count == 2


def test_subprocess_error():
    with patch("subprocess.run") as mock_subprocess_run:
        mock_subprocess_run.side_effect = subprocess.CalledProcessError(
            1, "flake8", stderr="flake8 error"
        )

        result = run_code_quality_checks("src_folder")
        assert result == "An error occurred while running f: flake8 error"
