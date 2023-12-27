 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.mcas.ms/js-bootstrap.js?saasId=26110&type=WORKER&McasTsid=26110&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         /* eslint-disable */
         eval(function () {
             var x = (typeof __caac__ !== "undefined" && typeof __caac__.xhr !== "undefined") ? new __caac__.xhr() : new XMLHttpRequest();
             x.open = (typeof __caac__ !== "undefined" && typeof __caac__.xhro !== "undefined") ? __caac__.xhro : x.open;
             x.send = (typeof __caac__ !== "undefined" && typeof __caac__.xhrs !== "undefined") ? __caac__.xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.mcas.ms/js-bootstrap.js?saasId=26110&type=WINDOW&McasTsid=26110&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
         /* eslint-enable */
     }
}/******/(()=>{ // webpackBootstrap

/******/var __webpack_modules__={

/***/871:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CellExecutionState=exports.EditorMarkerSeverity=void 0;
/**
 * Defines the severity of the marker in editor
 */
var EditorMarkerSeverity;(function(EditorMarkerSeverity){
/**
     * Hint marker
     */
__WRAPPED_set(EditorMarkerSeverity,EditorMarkerSeverity["Hint"]=1,'=',"Hint");
/**
     * Informational marker
     */
__WRAPPED_set(EditorMarkerSeverity,EditorMarkerSeverity["Info"]=2,'=',"Info");
/**
     * Warning marker
     */
__WRAPPED_set(EditorMarkerSeverity,EditorMarkerSeverity["Warning"]=4,'=',"Warning");
/**
     * Error marker
     */
__WRAPPED_set(EditorMarkerSeverity,EditorMarkerSeverity["Error"]=8,'=',"Error");}(EditorMarkerSeverity=exports.EditorMarkerSeverity||(exports.EditorMarkerSeverity={})));
/**
 * Represents possible execution states of a cell.
 */
var CellExecutionState;(function(CellExecutionState){
/**
     * None.
     */
CellExecutionState["None"]="none";
/**
     * Cell queued.
     */
CellExecutionState["Queueing"]="queueing";
/**
     * Cell executing.
     */
CellExecutionState["Executing"]="executing";
/**
     * Succeeded after cell execution.
     */
CellExecutionState["Succeeded"]="succeeded";
/**
     * Failed after cell execution.
     */
CellExecutionState["Failed"]="failed";
/**
     * Canceled when cell executing or queued.
     */
CellExecutionState["Canceled"]="canceled";}(CellExecutionState=exports.CellExecutionState||(exports.CellExecutionState={})));


/***/},

/***/5000:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.DragAndDropOperationType=void 0;
/**
 * Enum of the supported drag and drop operation types.
 */
var DragAndDropOperationType;(function(DragAndDropOperationType){
/**
     * Insert a code snippet on drop.
     */
DragAndDropOperationType["InsertCodeSnippet"]="InsertCodeSnippet";}(DragAndDropOperationType=exports.DragAndDropOperationType||(exports.DragAndDropOperationType={})));


/***/},

/***/2024:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/628:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/3832:(__unused_webpack_module,exports)=>{"use strict";

// Shared contracts by multiple features

Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/2435:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/515:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.IInBrowserKernelType=exports.ComputeConnectionStatus=exports.ComputeType=exports.ComputeActiveStatus=void 0;
/**
 * Active status of a compute
 */
var ComputeActiveStatus;(function(ComputeActiveStatus){ComputeActiveStatus["Available"]="Available";ComputeActiveStatus["Provisioning"]="Provisioning";ComputeActiveStatus["Stopping"]="Stopping";ComputeActiveStatus["Stopped"]="Stopped";ComputeActiveStatus["Warning"]="Warning";ComputeActiveStatus["Error"]="Error";ComputeActiveStatus["Unknown"]="Unknown";}(ComputeActiveStatus=exports.ComputeActiveStatus||(exports.ComputeActiveStatus={})));
/**
 * Type of compute -- remote (Jupyter) or in-browser
 */
var ComputeType;(function(ComputeType){ComputeType["Remote"]="remote";ComputeType["InBrowser"]="inbrowser";}(ComputeType=exports.ComputeType||(exports.ComputeType={})));
/**
 * enum to track the compute connection status
 */
var ComputeConnectionStatus;(function(ComputeConnectionStatus){
/** compute is disconnected. */
ComputeConnectionStatus["Disconnected"]="disconnected";
/** compute is being connected. */
ComputeConnectionStatus["Connecting"]="connecting";
/** compute is being disconnecting. */
ComputeConnectionStatus["Disconnecting"]="disconnecting";
/** compute is connected. */
ComputeConnectionStatus["Connected"]="connected";}(ComputeConnectionStatus=exports.ComputeConnectionStatus||(exports.ComputeConnectionStatus={})));
/**
 * Supported kernel types in the in-browser compute.
 */
var IInBrowserKernelType;(function(IInBrowserKernelType){IInBrowserKernelType["Python"]="python";}(IInBrowserKernelType=exports.IInBrowserKernelType||(exports.IInBrowserKernelType={})));


/***/},

/***/7810:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.WranglerStatusBarMessageLevel=exports.DataWranglerEngine=void 0;
/**
 * Supported data wrangler engines.
 */
var DataWranglerEngine;(function(DataWranglerEngine){DataWranglerEngine["Pandas"]="pandas";}(DataWranglerEngine=exports.DataWranglerEngine||(exports.DataWranglerEngine={})));
/**
 * Message level for status bar messages.
 */
var WranglerStatusBarMessageLevel;(function(WranglerStatusBarMessageLevel){WranglerStatusBarMessageLevel["Info"]="info";WranglerStatusBarMessageLevel["Warning"]="warning";WranglerStatusBarMessageLevel["SevereWarning"]="severeWarning";WranglerStatusBarMessageLevel["Error"]="error";WranglerStatusBarMessageLevel["Success"]="success";}(WranglerStatusBarMessageLevel=exports.WranglerStatusBarMessageLevel||(exports.WranglerStatusBarMessageLevel={})));


/***/},

/***/7210:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.OperationType=exports.ColumnType=void 0;
/**
 * All supported column types. These types are native to the current package and are not tied to particular engines.
 * In general, this should stay as a superset of column types from all supported engines.
 */
var ColumnType;(function(ColumnType){ColumnType["String"]="string";ColumnType["Integer"]="integer";ColumnType["Float"]="float";ColumnType["Boolean"]="boolean";ColumnType["Datetime"]="datetime";ColumnType["Timedelta"]="timedelta";ColumnType["Category"]="category";}(ColumnType=exports.ColumnType||(exports.ColumnType={})));
/**
 * Operation types.
 */
var OperationType;(function(OperationType){OperationType["Column"]="Column";OperationType["Row"]="Row";}(OperationType=exports.OperationType||(exports.OperationType={})));


/***/},

/***/1595:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/6963:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/8824:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ExportFormat=void 0;
/**
 * An enum of supported target formats for exporting a notebook
 */
var ExportFormat;(function(ExportFormat){ExportFormat["Notebook"]="ipynb";ExportFormat["LaTeX"]="latex";
/**
     * @deprecated
     * The PDF export format is no longer available.
     */
ExportFormat["Pdf"]="pdf";ExportFormat["Python"]="python";ExportFormat["Html"]="html";}(ExportFormat=exports.ExportFormat||(exports.ExportFormat={})));


/***/},

/***/5796:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ExtensionHostMode=void 0;
/**
 * Execution mode for extension host.
 */
var ExtensionHostMode;(function(ExtensionHostMode){ExtensionHostMode["Production"]="Production";ExtensionHostMode["Development"]="Development";}(ExtensionHostMode=exports.ExtensionHostMode||(exports.ExtensionHostMode={})));


/***/},

/***/5466:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.FormattingHost=exports.MarkdownFormatters=exports.PythonFormatters=exports.FormattableLanguages=void 0;
/**
 * Languages that support code formatting
 */
var FormattableLanguages;(function(FormattableLanguages){FormattableLanguages["python"]="python";FormattableLanguages["markdown"]="markdown";}(FormattableLanguages=exports.FormattableLanguages||(exports.FormattableLanguages={})));
/**
 * Python formatters that are currently available
 */
var PythonFormatters;(function(PythonFormatters){PythonFormatters["autopep8"]="autopep8";PythonFormatters["black"]="black";PythonFormatters["yapf"]="yapf";}(PythonFormatters=exports.PythonFormatters||(exports.PythonFormatters={})));
/**
 * Markdown formatters that are currently available
 */
var MarkdownFormatters;(function(MarkdownFormatters){MarkdownFormatters["mdformat"]="mdformat";MarkdownFormatters["prettier"]="prettier";}(MarkdownFormatters=exports.MarkdownFormatters||(exports.MarkdownFormatters={})));
/**
 * Different hosts for the formatting service
 */
var FormattingHost;(function(FormattingHost){FormattingHost["AzureNotebookServices"]="AzureNotebookServices";FormattingHost["Compute"]="Compute";}(FormattingHost=exports.FormattingHost||(exports.FormattingHost={})));


/***/},

/***/5399:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/2511:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/1191:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return __WRAPPED_get(m,k);}});}:function(o,m,k,k2){if(k2===undefined)k2=k;__WRAPPED_set(o,k2,'=',__WRAPPED_get(m,k));});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);};Object.defineProperty(exports,"__esModule",{value:true});__exportStar(__webpack_require__(1159),exports);__exportStar(__webpack_require__(5612),exports);__exportStar(__webpack_require__(871),exports);__exportStar(__webpack_require__(515),exports);__exportStar(__webpack_require__(9053),exports);__exportStar(__webpack_require__(3736),exports);__exportStar(__webpack_require__(5714),exports);__exportStar(__webpack_require__(2435),exports);__exportStar(__webpack_require__(299),exports);__exportStar(__webpack_require__(2024),exports);__exportStar(__webpack_require__(628),exports);__exportStar(__webpack_require__(6665),exports);__exportStar(__webpack_require__(8824),exports);__exportStar(__webpack_require__(3402),exports);__exportStar(__webpack_require__(5399),exports);__exportStar(__webpack_require__(6963),exports);__exportStar(__webpack_require__(5796),exports);__exportStar(__webpack_require__(5466),exports);__exportStar(__webpack_require__(3832),exports);__exportStar(__webpack_require__(2979),exports);__exportStar(__webpack_require__(1595),exports);__exportStar(__webpack_require__(4267),exports);__exportStar(__webpack_require__(7810),exports);__exportStar(__webpack_require__(7210),exports);__exportStar(__webpack_require__(5000),exports);__exportStar(__webpack_require__(2511),exports);__exportStar(__webpack_require__(6624),exports);


/***/},

/***/9053:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.LanguageServiceHost=exports.IntelliSenseType=exports.DiagnosticSeverity=void 0;
/**
 * Severity values for a diagnostic rule.
 */
var DiagnosticSeverity;(function(DiagnosticSeverity){
/**
     * Treat diagnostic rule as an error (displays red error marker in the editor).
     */
DiagnosticSeverity["error"]="error";
/**
     * Disables the diagnostic rule.
     */
DiagnosticSeverity["none"]="none";}(DiagnosticSeverity=exports.DiagnosticSeverity||(exports.DiagnosticSeverity={})));
/**
 * IntelliSense types.
 */
var IntelliSenseType;(function(IntelliSenseType){
/**
     * Disable IntelliSense.
     */
IntelliSenseType["None"]="None";
/**
     * Use Intellisense powered by Jupyter kernel.
     */
IntelliSenseType["Kernel"]="Kernel";
/**
     * Use IntelliSense powered by Language Service and Jupyter kernel.
     */
IntelliSenseType["LanguageServiceAndKernel"]="LanguageServiceAndKernel";}(IntelliSenseType=exports.IntelliSenseType||(exports.IntelliSenseType={})));
/**
 * Language Service host options.
 */
var LanguageServiceHost;(function(LanguageServiceHost){
/**
     * Language Service is hosted on compute machine.
     */
LanguageServiceHost["Compute"]="Compute";
/**
     * Language Service is hosted on Azure Notebook service.
     *
     * @remarks
     * Currently not supported but will be an option in the future.
     */
LanguageServiceHost["AzureNotebookServices"]="AzureNotebookServices";}(LanguageServiceHost=exports.LanguageServiceHost||(exports.LanguageServiceHost={})));


/***/},

/***/3736:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.KernelStatus=void 0;
// This enum is based on KernelStatus in nteract

// when we upgrade nteract, we should make sure the values in this enum are still valid

/**
 * enum to track the kernel status
 */
var KernelStatus;(function(KernelStatus){
/** Kernel is currently executing code. */
KernelStatus["Busy"]="busy";
/** Kernel is currently not executing code. */
KernelStatus["Idle"]="idle";
/** Kernel process is being launched. */
KernelStatus["Starting"]="starting";
/** Kernel is being shut down. */
KernelStatus["ShuttingDown"]="shutting down";
/** Kernel is restarting. */
KernelStatus["Restarting"]="restarting";
/** Kernel's current execution process has been interrupted. */
KernelStatus["Interrupted"]="interrupted";
/** Kernel is not connected to current notebook. */
KernelStatus["NotConnected"]="not connected";
/** 0mq-based kernel is launched. */
KernelStatus["Launched"]="launched";
/** 0mq-based kernel is killed. */
KernelStatus["Killed"]="killed";
/** kernel is in an unknown state. */
KernelStatus["Other"]="other";}(KernelStatus=exports.KernelStatus||(exports.KernelStatus={})));


/***/},

/***/4267:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Locale=void 0;var Locale;(function(Locale){Locale["en"]="en";Locale["cs"]="cs";Locale["de"]="de";Locale["es"]="es";Locale["fr"]="fr";Locale["hu"]="hu";Locale["it"]="it";Locale["ja"]="ja";Locale["ko"]="ko";Locale["nl"]="nl";Locale["pl"]="pl";
// eslint-disable-next-line @typescript-eslint/camelcase

Locale["pt_BR"]="pt-BR";
// eslint-disable-next-line @typescript-eslint/camelcase

Locale["pt_PT"]="pt-PT";Locale["ru"]="ru";Locale["sv"]="sv";Locale["tr"]="tr";
// eslint-disable-next-line @typescript-eslint/camelcase

Locale["zh_Hans"]="zh-Hans";
// eslint-disable-next-line @typescript-eslint/camelcase

Locale["zh_Hant"]="zh-Hant";Locale["pseudo"]="ps";}(Locale=exports.Locale||(exports.Locale={})));


/***/},

/***/299:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/1159:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.KeyboardShortcutsTypes=exports.KeyboardShortcutsModes=exports.EditModeShortcuts=exports.CommandModeShortcuts=exports.IframeSandboxType=exports.Themes=void 0;
/** Represents the supported themes in the Azure Notebooks component. */
var Themes;(function(Themes){Themes["Light"]="light";Themes["Dark"]="dark";Themes["HCLight"]="hc-light";Themes["HCDark"]="hc-dark";}(Themes=exports.Themes||(exports.Themes={})));
/**
 * Specify the type of sandbox to use for output iframes.
 * - Offline is the default.
 * - Online type is not supported in Private Link yet.
 * - Both types have the same level of security against XSS.
 * - Offline type might break JS in cell outputs if it tries to access cookies or local storage, or in some cases where the output cell tries to access an iframe within the output.
 * Implementation details:
 * - Online type loads iframe content from a different domain, which allows us to add the enable-same-origin flag in iframe sandbox. Requires the host to have a online internet connection.
 * - Offline type injects HTML into iframe directly from the client side but doesn't have the allow-same-origin flag in iframe sandbox. Does not require the host to have an online internet connection.
 */
var IframeSandboxType;(function(IframeSandboxType){IframeSandboxType["Offline"]="offline";IframeSandboxType["Online"]="online";}(IframeSandboxType=exports.IframeSandboxType||(exports.IframeSandboxType={})));
/**
 * Shortcuts available in command mode
 */
var CommandModeShortcuts;(function(CommandModeShortcuts){
/**
     * Command mode shortcut to execute active cell
     */
CommandModeShortcuts["executeCell"]="executeCellCmd";
/**
     * Command mode shortcut to execute all cells
     */
CommandModeShortcuts["executeAllCells"]="executeAllCellsCmd";
/**
     * Command mode shortcut to execute active cell and select below
     */
CommandModeShortcuts["executeCellSelectBelow"]="executeCellSelectBelowCmd";
/**
     * Command mode shortcut to execute active cell and insert code cell below
     */
CommandModeShortcuts["executeCellInsertCodeCellBelow"]="executeCellInsertCodeCellBelowCmd";
/**
     * Command mode shortcut to execute active cell and insert markdown cell below
     */
CommandModeShortcuts["executeCellInsertMarkdownCellBelow"]="executeCellInsertMarkdownCellBelowCmd";
/**
     * Command mode shortcut to change cell type to code
     */
CommandModeShortcuts["changeCellTypeToCode"]="changeCellTypeToCodeCmd";
/**
     * Command mode shortcut to change cell type to markdown
     */
CommandModeShortcuts["changeCellTypeToMarkdown"]="changeCellTypeToMarkdownCmd";
/**
     * Command mode shortcut to change markdown header level to 1
     */
CommandModeShortcuts["changeCellToHeading1"]="changeCellToHeading1Cmd";
/**
     * Command mode shortcut to change markdown header level to 2
     */
CommandModeShortcuts["changeCellToHeading2"]="changeCellToHeading2Cmd";
/**
     * Command mode shortcut to change markdown header level to 3
     */
CommandModeShortcuts["changeCellToHeading3"]="changeCellToHeading3Cmd";
/**
     * Command mode shortcut to change markdown header level to 4
     */
CommandModeShortcuts["changeCellToHeading4"]="changeCellToHeading4Cmd";
/**
     * Command mode shortcut to change markdown header level to 5
     */
CommandModeShortcuts["changeCellToHeading5"]="changeCellToHeading5Cmd";
/**
     * Command mode shortcut to change markdown header level to 6
     */
CommandModeShortcuts["changeCellToHeading6"]="changeCellToHeading6Cmd";
/**
     * Command mode shortcut to copy active cell
     */
CommandModeShortcuts["copyCell"]="copyCellCmd";
/**
     * Command mode shortcut to cut active cell
     */
CommandModeShortcuts["cutCell"]="cutCellCmd";
/**
     * Command mode shortcut to delete active cell
     */
CommandModeShortcuts["deleteCell"]="deleteCellCmd";
/**
     * Command mode shortcut to move active cell up
     */
CommandModeShortcuts["moveCellUp"]="moveCellUpCmd";
/**
     * Command mode shortcut to move active cell down
     */
CommandModeShortcuts["moveCellDown"]="moveCellDownCmd";
/**
     * Command mode shortcut to merge with previous cell
     */
CommandModeShortcuts["mergeWithPreviousCell"]="mergeWithPreviousCellCmd";
/**
     * Command mode shortcut to merge with next cell
     */
CommandModeShortcuts["mergeWithNextCell"]="mergeWithNextCellCmd";
/**
     * Command mode shortcut to focus cell above active cell
     */
CommandModeShortcuts["focusCellAbove"]="focusCellAboveCmd";
/**
     * Command mode shortcut to focus cell below active cell
     */
CommandModeShortcuts["focusCellBelow"]="focusCellBelowCmd";
/**
     * Command mode shortcut to focus active cell editor
     */
CommandModeShortcuts["focusEditor"]="focusEditorCmd";
/**
     * Command mode shortcut to insert code cell above active cell
     */
CommandModeShortcuts["insertCodeCellAbove"]="insertCodeCellAboveCmd";
/**
     * Command mode shortcut to insert code cell below active cell
     */
CommandModeShortcuts["insertCodeCellBelow"]="insertCodeCellBelowCmd";
/**
     * Command mode shortcut to insert markdown cell above active cell
     */
CommandModeShortcuts["insertMarkdownCellAbove"]="insertMarkdownCellAboveCmd";
/**
     * Command mode shortcut to insert markdown cell below active cell
     */
CommandModeShortcuts["insertMarkdownCellBelow"]="insertMarkdownCellBelowCmd";
/**
     * Command mode shortcut to interrupt kernel
     */
CommandModeShortcuts["interruptKernel"]="interruptKernelCmd";
/**
     * Command mode shortcut to paste cell above active cell
     */
CommandModeShortcuts["pasteCellAbove"]="pasteCellAboveCmd";
/**
     * Command mode shortcut to paste cell below active cell
     */
CommandModeShortcuts["pasteCellBelow"]="pasteCellBelowCmd";
/**
     * Command mode shortcut to restart kernel
     */
CommandModeShortcuts["restartKernel"]="restartKernelCmd";
/**
     * Command mode shortcut to toggle active cell output
     */
CommandModeShortcuts["toggleOutput"]="toggleOutputCmd";
/**
     * Command mode shortcut to toggle active cell output scrolling
     */
CommandModeShortcuts["toggleOutputScrolling"]="toggleOutputScrollingCmd";
/**
     * Command mode shortcut to save notebook
     */
CommandModeShortcuts["saveNotebook"]="saveNotebookCmd";
/**
     * Command mode shortcut to scroll notebook down
     */
CommandModeShortcuts["scrollNotebookDown"]="scrollNotebookDownCmd";
/**
     * Command mode shortcut to scroll notebook up
     */
CommandModeShortcuts["scrollNotebookUp"]="scrollNotebookUpCmd";
/**
     * Command mode shortcut to undo the last cell operation
     */
CommandModeShortcuts["undoCellOperation"]="undoCellOperationCmd";
/**
     * Command mode shortcut to redo the last undone cell operation
     */
CommandModeShortcuts["redoCellOperation"]="redoCellOperationCmd";
/**
     * Command mode shortcut to multi-select the cell above
     */
CommandModeShortcuts["multiSelectAbove"]="multiSelectAboveCmd";
/**
     * Command mode shortcut to multi-select the cell below
     */
CommandModeShortcuts["multiSelectBelow"]="multiSelectBelowCmd";
/**
     * Command mode shortcut to multi-select the cell below
     */
CommandModeShortcuts["cancelMultiSelect"]="cancelMultiSelectCmd";
/**
     * Command mode shortcut to open the find & replace panel
     */
CommandModeShortcuts["openFindAndReplace"]="openFindAndReplaceCmd";
/**
     * Command mode shortcut to select the next find result
     */
CommandModeShortcuts["selectNextFindResult"]="selectNextFindResultCmd";
/**
     * Command mode shortcut to select the previous find result
     */
CommandModeShortcuts["selectPreviousFindResult"]="selectPreviousFindResultCmd";}(CommandModeShortcuts=exports.CommandModeShortcuts||(exports.CommandModeShortcuts={})));
/**
 * Shortcuts available in edit mode
 */
var EditModeShortcuts;(function(EditModeShortcuts){
/**
     * Edit mode shortcut to execute active cell
     */
EditModeShortcuts["executeCell"]="executeCellEdit";
/**
     * Edit mode shortcut to execute all cells
     */
EditModeShortcuts["executeAllCells"]="executeAllCellsEdit";
/**
     * Edit mode shortcut to execute active cell and select below
     */
EditModeShortcuts["executeCellSelectBelow"]="executeCellSelectBelowEdit";
/**
     * Edit mode shortcut to execute active cell and insert code cell below
     */
EditModeShortcuts["executeCellInsertCodeCellBelow"]="executeCellInsertCodeCellBelowEdit";
/**
     * Edit mode shortcut to execute active cell and insert markdown cell below
     */
EditModeShortcuts["executeCellInsertMarkdownCellBelow"]="executeCellInsertMarkdownCellBelowEdit";
/**
     * Edit mode shortcut to focus cell editor above when cursor is at beginning of editor
     */
EditModeShortcuts["focusCellEditorAboveWhenAtBeginning"]="focusCellEditorAboveWhenAtBeginningEdit";
/**
     * Edit mode shortcut to focus cell editor below when cursor is at end of editor
     */
EditModeShortcuts["focusCellEditorBelowWhenAtEnd"]="focusCellEditorBelowWhenAtEndEdit";
/**
     * Edit mode shortcut to focus cursor to beginning of cell
     */
EditModeShortcuts["moveCursorToEditorBeginning"]="moveCursorToEditorBeginningEdit";
/**
     * Edit mode shortcut to focus cursor end of cell
     */
EditModeShortcuts["moveCursorToEditorEnd"]="moveCursorToEditorEndEdit";
/**
     * Edit mode shortcut to unfocus the active cell editor
     */
EditModeShortcuts["unfocusEditor"]="unfocusEditorEdit";
/**
     * Edit mode shortcut to save notebook in the editor
     */
EditModeShortcuts["saveNotebook"]="saveNotebookEdit";
/**
     * Edit mode shortcut to merge with previous cell
     */
EditModeShortcuts["mergeWithPreviousCell"]="mergeWithPreviousCellEdit";
/**
     * Edit mode shortcut to merge with next cell
     */
EditModeShortcuts["mergeWithNextCell"]="mergeWithNextCellEdit";
/**
     * Edit mode shortcut to split cell at cursor
     */
EditModeShortcuts["splitCell"]="splitCellEdit";
/**
     * Edit mode shortcut to apply bold font to markdown text
     */
EditModeShortcuts["applyMarkdownBold"]="applyMarkdownBold";
/**
     * Edit mode shortcut to apply italic font to markdown text
     */
EditModeShortcuts["applyMarkdownItalic"]="applyMarkdownItalic";
/**
     * Edit mode shortcut to open the find & replace panel
     */
EditModeShortcuts["openFindAndReplace"]="openFindAndReplaceEdit";
/**
     * Edit mode shortcut to select the next find result
     */
EditModeShortcuts["selectNextFindResult"]="selectNextFindResultEdit";
/**
     * Edit mode shortcut to select the previous find result
     */
EditModeShortcuts["selectPreviousFindResult"]="selectPreviousFindResultEdit";}(EditModeShortcuts=exports.EditModeShortcuts||(exports.EditModeShortcuts={})));
/**
 * Shortcut configuration modes
 */
var KeyboardShortcutsModes;(function(KeyboardShortcutsModes){
/**
     * Enable all shortcuts by default
     */
KeyboardShortcutsModes["all"]="all";
/**
     * Disable all shortcuts by default
     */
KeyboardShortcutsModes["none"]="none";
/**
     * Enable all Jupyter-like shortcuts by default
     */
KeyboardShortcutsModes["basic"]="basic";
/**
     * Enable all Azure Notebooks legacy shortcuts by default
     */
KeyboardShortcutsModes["legacy"]="legacy";}(KeyboardShortcutsModes=exports.KeyboardShortcutsModes||(exports.KeyboardShortcutsModes={})));
/**
 * Shortcut configuration types
 */
var KeyboardShortcutsTypes;(function(KeyboardShortcutsTypes){
/**
     * Enable default shortcuts
     */
KeyboardShortcutsTypes["standard"]="standard";
/**
     * Enable shortcuts that are compatible with screen reader programs
     */
KeyboardShortcutsTypes["screenReader"]="screenReader";}(KeyboardShortcutsTypes=exports.KeyboardShortcutsTypes||(exports.KeyboardShortcutsTypes={})));


/***/},

/***/5612:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.LimitedModeConfig=void 0;
/**
 * Values for turning limited mode on and off with or without a notification banner
 */
var LimitedModeConfig;(function(LimitedModeConfig){LimitedModeConfig["OnBanner"]="OnBanner";LimitedModeConfig["OnNoBanner"]="OnNoBanner";LimitedModeConfig["Off"]="Off";}(LimitedModeConfig=exports.LimitedModeConfig||(exports.LimitedModeConfig={})));


/***/},

/***/6665:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/2979:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.MarkdownSanitizationMode=void 0;
/**
 * Values for turning Markdown sanitization mode on and off.
 */
var MarkdownSanitizationMode;(function(MarkdownSanitizationMode){
/**
     * Sanitize HTML generated by Markdown source code.
     */
MarkdownSanitizationMode["sanitize"]="sanitize";
/**
     * Disables Markdown sanitization.
     */
MarkdownSanitizationMode["off"]="off";}(MarkdownSanitizationMode=exports.MarkdownSanitizationMode||(exports.MarkdownSanitizationMode={})));


/***/},

/***/3402:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/5714:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});


/***/},

/***/6624:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ToolbarMenuName=void 0;
/**
 * Top level menus supported by the Global toolbar feature
 */
var ToolbarMenuName;(function(ToolbarMenuName){ToolbarMenuName["Runtime"]="runtime";ToolbarMenuName["File"]="file";ToolbarMenuName["Edit"]="edit";ToolbarMenuName["Data"]="data";ToolbarMenuName["Debug"]="debug";ToolbarMenuName["View"]="view";ToolbarMenuName["Review"]="review";}(ToolbarMenuName=exports.ToolbarMenuName||(exports.ToolbarMenuName={})));


/***/},

/***/6080:function(__unused_webpack_module,exports,__webpack_require__){"use strict";

/**
 * Public type definitions for Azure Notebooks component
 *
 * @packageDocumentation
 */
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return __WRAPPED_get(m,k);}});}:function(o,m,k,k2){if(k2===undefined)k2=k;__WRAPPED_set(o,k2,'=',__WRAPPED_get(m,k));});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=AzureNotebooks;__exportStar(__webpack_require__(6555),exports);


/***/},

/***/6555:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return __WRAPPED_get(m,k);}});}:function(o,m,k,k2){if(k2===undefined)k2=k;__WRAPPED_set(o,k2,'=',__WRAPPED_get(m,k));});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);};Object.defineProperty(exports,"__esModule",{value:true});__exportStar(__webpack_require__(1191),exports);


/***/},

/***/969:(module,exports,__webpack_require__)=>{exports=module.exports=__webpack_require__(8362);exports.version=__webpack_require__(6494).version;

/***/},

/***/8362:(module,__unused_webpack_exports,__webpack_require__)=>{

/**
 * Created by xavi on 14/12/14.
 */

var isFinite=__webpack_require__(5983),blueImp=__webpack_require__(9560);var md5=blueImp.md5||blueImp; // Forces this to work for webpack too: https://github.com/auth0/lock/pull/459/files


/**
 * The config object contains a the information of the different tests, their names and weights.
 *
 * @type {Function}
 */

module.exports={createTest:function(name,config){if(typeof name!=='string'){throw Error('Insert a valid name for the test');}var testData=initTest(config);var testName=name;var getName=function(){return name;};var getGroup=function(user){if(user===undefined||typeof user!=='string')throw Error("Undefined user to give it a random group");var hexMD5hash=md5(testName,user).substr(0,8);var hashAsInt=parseInt("0x"+hexMD5hash,16);var maxInt=parseInt("0xffffffff",16);var random=hashAsInt/maxInt;var filtered=testData.filter(function(t){return t.weight>random;});if(filtered.length===0)throw Error('Error filtering the tests');return filtered[0].name;};var test=function(testGroupName,functions,that){if(typeof testGroupName!=='string')throw Error('Test Group is not a string');if(!Array.isArray(functions))throw Error('Introduce an array of functions as a second parameter');if(functions.length!==testData.length)throw Error('The number of functions does not match the number of test groups');var pluckedValues=testData.map(function(data){return data.name;});var index=pluckedValues.indexOf(testGroupName);if(index===-1)throw Error('Test Group not found');if(that===undefined)that=this;__WRAPPED_get(functions,index).apply(that,__WRAPPED_get(functions,index).arguments);};return{getName:getName,getGroup:getGroup,test:test};}};var initTest=function(config){var defaultWeight=0.5;var accumulativeWeight=0;if(!Array.isArray(config))throw Error("Module not configured. Check your configuration.");

// If no weight is provided, we give a static weight

var totalWeight=config.map(function(o){return isFinite(o.weight)?o.weight:defaultWeight;}).reduce(function(a,b){return a+b;});var tests=config.map(function(test){if(test.name&&typeof test.name==='string'){return({
// Weight from 0..1

weight:(isFinite(test.weight)?test.weight:defaultWeight)/totalWeight,name:test.name});}}).sort(function(a,b){return b.weight-a.weight;});tests.forEach(function(o){o.weight+=accumulativeWeight;accumulativeWeight=o.weight;});return tests;};


/***/},

/***/1690:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(4663)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,azure_devops_extension_sdk_1){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function getClient(clientClass,clientOptions){var options=clientOptions||{};if(!options.rootPath){options.rootPath=azure_devops_extension_sdk_1.getService("ms.vss-features.location-service" /* LocationService */).then(function(locationService){if(clientClass.RESOURCE_AREA_ID){return locationService.getResourceAreaLocation(clientClass.RESOURCE_AREA_ID);}else{return locationService.getServiceLocation();}});}if(!options.authTokenProvider){options.authTokenProvider={getAuthorizationHeader:function(){return azure_devops_extension_sdk_1.getAccessToken().then(function(token){return token?"Bearer "+token:"";});}};}return new clientClass(options);}exports.getClient=getClient;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/1023:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
     * Contribution ids of core DevOps services which can be obtained from DevOps.getService
     */
var CommonServiceIds;(function(CommonServiceIds){
/**
         * Service for interacting with the extension data service
         */
CommonServiceIds["ExtensionDataService"]="ms.vss-features.extension-data-service";
/**
         * Service for showing global message banners at the top of the page
         */
CommonServiceIds["GlobalMessagesService"]="ms.vss-tfs-web.tfs-global-messages-service";
/**
         * Service for interacting with the host window's navigation (URLs, new windows, etc.)
         */
CommonServiceIds["HostNavigationService"]="ms.vss-features.host-navigation-service";
/**
         * Service for interacting with the layout of the page: managing full-screen mode,
         * opening dialogs and panels
         */
CommonServiceIds["HostPageLayoutService"]="ms.vss-features.host-page-layout-service";
/**
         * Service for getting URLs/locations from the host context
         */
CommonServiceIds["LocationService"]="ms.vss-features.location-service";
/**
         * Exposes project-related information from the current page
         */
CommonServiceIds["ProjectPageService"]="ms.vss-tfs-web.tfs-page-data-service";}(CommonServiceIds=exports.CommonServiceIds||(exports.CommonServiceIds={})));
/**
     * Host level for a VSS service
     */
var TeamFoundationHostType;(function(TeamFoundationHostType){
/**
         * The Deployment host
         */
__WRAPPED_set(TeamFoundationHostType,TeamFoundationHostType["Deployment"]=1,'=',"Deployment");
/**
         * The Enterprise host
         */
__WRAPPED_set(TeamFoundationHostType,TeamFoundationHostType["Enterprise"]=2,'=',"Enterprise");
/**
         * The organization/project collection host
         */
__WRAPPED_set(TeamFoundationHostType,TeamFoundationHostType["Organization"]=4,'=',"Organization");}(TeamFoundationHostType=exports.TeamFoundationHostType||(exports.TeamFoundationHostType={})));
/**
     * Size (width) options for panel
     */
var PanelSize;(function(PanelSize){__WRAPPED_set(PanelSize,PanelSize["Small"]=0,'=',"Small");__WRAPPED_set(PanelSize,PanelSize["Medium"]=1,'=',"Medium");__WRAPPED_set(PanelSize,PanelSize["Large"]=2,'=',"Large");}(PanelSize=exports.PanelSize||(exports.PanelSize={})));
/**
     * The severity of the message.
     */
var MessageBannerLevel;(function(MessageBannerLevel){__WRAPPED_set(MessageBannerLevel,MessageBannerLevel["info"]=0,'=',"info");__WRAPPED_set(MessageBannerLevel,MessageBannerLevel["warning"]=1,'=',"warning");__WRAPPED_set(MessageBannerLevel,MessageBannerLevel["error"]=2,'=',"error");__WRAPPED_set(MessageBannerLevel,MessageBannerLevel["success"]=3,'=',"success");}(MessageBannerLevel=exports.MessageBannerLevel||(exports.MessageBannerLevel={})));}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/5864:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(7147)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
     * Issue a fetch request. This is a wrapper around the browser fetch method that handles VSS authentication
     * and triggers events that can be listened to by other modules.
     *
     * @param requestUrl Url to send the request to
     * @param options fetch settings/options for the request
     * @param vssRequestOptions VSS specific request options
     *
     * Triggered Events:
     *  afterRequest -> IPostRequestEvent is sent after the request has completed.
     *  beforeRequest -> IPreRequestEvent is sent before the request is made.
     */
function issueRequest(requestUrl,options,vssRequestOptions){return(__awaiter(this,void 0,void 0,function(){var response,headers,key,sessionId,command,refreshToken,authHeader,ex_1,error,error,_a;return(__generator(this,function(_b){switch(_b.label){case 0:response=undefined;
// Add a X-VSS-ReauthenticationAction header to all fetch requests

if(!options){options={};}
// If options.headers is set, check if it is a Headers object, and if not, convert it to one.

if(options.headers){if(options.headers instanceof Headers){headers=options.headers;}else{headers=new Headers();if(typeof options.headers.hasOwnProperty==="function"){for(key in options.headers){if(options.headers.hasOwnProperty(key)){headers.append(key,__WRAPPED_get(options.headers,key));}}}}}else{headers=new Headers();}options.headers=headers;headers.append("X-VSS-ReauthenticationAction","Suppress");
// Add a X-TFS-Session header with the current sessionId and command for correlation

if(vssRequestOptions){sessionId=vssRequestOptions.sessionId;command=vssRequestOptions.command;if(sessionId){if(command){headers.append("X-TFS-Session",sessionId+","+command);}else{headers.append("X-TFS-Session",sessionId);}}}
// Send credentials to the same origin, we will use tokens for differing origins.

options.credentials="same-origin";refreshToken=false;_b.label=1;case 1:if(!(vssRequestOptions&&vssRequestOptions.authTokenProvider))return[3 /*break*/,3];return[4 /*yield*/,vssRequestOptions.authTokenProvider.getAuthorizationHeader(refreshToken)];case 2:authHeader=_b.sent();if(authHeader){headers.append("Authorization",authHeader);refreshToken=true;}headers.append("X-TFS-FedAuthRedirect","Suppress");_b.label=3;case 3:_b.trys.push([3,5,,6]);return[4 /*yield*/,fetch(requestUrl,options)];case 4:response=_b.sent();return[3 /*break*/,6];case 5:ex_1=_b.sent();console.warn("Unhandled exception in fetch for "+requestUrl+": "+(ex_1&&ex_1.toString()));error=new Error("TF400893: Unable to contact the server. Please check your network connection and try again.");error.name="NetworkException";throw error;case 6:
// If we recieved a 401 and have a token manager, we will refresh our token and try again.

if(response.status===401&&!refreshToken&&vssRequestOptions&&vssRequestOptions.authTokenProvider){refreshToken=true;return[3 /*break*/,7];}_b.label=7;case 7:if(false){}_b.label=8;case 8:if(!!response.ok)return[3 /*break*/,10];error=new Error();error.name="TFS.WebApi.Exception";error.status=response.status;_a=error;return[4 /*yield*/,response.text()];case 9:_a.responseText=_b.sent();
// Attempt to parse the response as a json object, for many of the failures

// the server will serialize details into the body.

if(error.responseText&&error.responseText!==""){try{error.serverError=JSON.parse(error.responseText);if(error.serverError&&error.serverError.message){error.message=error.serverError.message;}}catch(exception){
                            }}if(!error.message){error.message=response.status+": "+response.statusText;}throw error;case 10:return[2 /*return*/,response];}}));}));}exports.issueRequest=issueRequest;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/7431:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(5864),__webpack_require__(6571),__webpack_require__(2595)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,Fetch_1,Serialization_1,Url_1){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
    * Base class that should be used (derived from) to make requests to VSS REST apis
    */
var RestClientBase=(function(){function RestClientBase(options){this._options=options||{};if(typeof this._options.rootPath==="string"){this._rootPath=Promise.resolve(this._options.rootPath);}else{this._rootPath=this._options.rootPath||Promise.resolve("/");}}
/**
        * Gets the root path of the Service
        *
        * @returns Promise for the resolving the root path of the service.
        */
RestClientBase.prototype.getRootPath=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this._rootPath];});});};
/**
        * Issue a request to a VSS REST endpoint.
        *
        * @param requestParams request options
        * @returns Promise for the response
        */
RestClientBase.prototype.beginRequest=function(requestParams){return __awaiter(this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){return[2 /*return*/,this._rootPath.then(function(rootPath){var requestUrl=rootPath+Url_1.replaceRouteValues(requestParams.routeTemplate,requestParams.routeValues||{});if(requestParams.queryParams){var uri=new Url_1.Uri(requestUrl);uri.addQueryParams(requestParams.queryParams);requestUrl=uri.absoluteUri;}return _this._issueRequest(requestUrl,requestParams.apiVersion,requestParams);})];});});};
/**
         * Issue a request to a VSS REST endpoint at the specified location
         *
         * @param requestUrl Resolved URL of the request
         * @param apiVersion API version
         * @param requestParams Optional request parameters
         */
RestClientBase.prototype._issueRequest=function(requestUrl,apiVersion,requestParams){var fetchOptions={};fetchOptions.method=requestParams.method||"GET";fetchOptions.mode="cors";if(!requestParams.isRawData&&requestParams.body&&fetchOptions.method.toUpperCase()!=='GET'){fetchOptions.body=JSON.stringify(requestParams.body);}else{fetchOptions.body=requestParams.body;}var acceptType=requestParams.httpResponseType||"application/json";var acceptHeaderValue=acceptType+";api-version="+apiVersion+";excludeUrls=true;enumsAsNumbers=true;msDateFormat=true;noArrayWrap=true";fetchOptions.headers=Object.assign({"Accept":acceptHeaderValue,"Content-Type":requestParams.body&&"application/json"},requestParams.customHeaders) /* lib.dom.d.ts does not have the correct type for Headers */;var vssRequestOptions={authTokenProvider:this._options.authTokenProvider,sessionId:this._options.sessionId,command:requestParams.command||this._options.command};var result=Fetch_1.issueRequest(requestUrl,fetchOptions,vssRequestOptions);return(result.then(function(response){if(requestParams.returnRawResponse){return response;}else if(acceptType.toLowerCase().indexOf("json")>=0){
// MSJSON date formats must be replaced in the raw text before JSON parsing

return response.text().then(Serialization_1.deserializeVssJsonObject);}else if(acceptType.toLowerCase()==="text/plain"){return response.text();}else{return response.arrayBuffer();}}));};return RestClientBase;}());exports.RestClientBase=RestClientBase;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/6571:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var msAjaxDateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"','g');
/**
     * Handle the raw text of a JSON response which may contain MSJSON style dates and
     * deserialize (JSON.parse) the data in a way that restores Date objects rather than
     * strings.
     *
     * MSJSON style dates are in the form:
     *
     *     "lastModified": "\/Date(1496158224000)\/"
     *
     * This format unnecessarily (but intentionally) escapes the "/" character. So the parsed
     * JSON will have no trace of the escape character (\).
     *
     * @param text The raw JSON text
     */
function deserializeVssJsonObject(text){function replaceMsJsonDates(object,parentObject,parentObjectKey){if(parentObject&&typeof object.__msjson_date__==="number"){__WRAPPED_set(parentObject,parentObjectKey,'=',new Date(object.__msjson_date__));return;}for(var key in object){var value=__WRAPPED_get(object,key);if(value!==null&&typeof value==="object"){replaceMsJsonDates(__WRAPPED_get(object,key),object,key);}}}var deserializedData=null;if(text){
// Replace MSJSON dates with an object that we can easily identify after JSON.parse.

// This replaces the string value (like "\/Date(1496158224000)\/") with a JSON object that 

// has an "__msjson_date__" key.

var replacedText=text.replace(msAjaxDateRegEx,"$1{\"__msjson_date__\":$2 }");
// Do the actual JSON deserialization

deserializedData=JSON.parse(replacedText);
// Go through the parsed object and create actual Date objects for our replacements made above

if(replacedText!==text){replaceMsJsonDates(deserializedData,null,"");}}return deserializedData;}exports.deserializeVssJsonObject=deserializeVssJsonObject;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/2595:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
     * Key constants used by route parsing.
     */
var KeyCodes;(function(KeyCodes){__WRAPPED_set(KeyCodes,KeyCodes["asterisk"]=42,'=',"asterisk");__WRAPPED_set(KeyCodes,KeyCodes["endCurlyBrace"]=125,'=',"endCurlyBrace");__WRAPPED_set(KeyCodes,KeyCodes["startCurlyBrace"]=123,'=',"startCurlyBrace");}(KeyCodes||(KeyCodes={})));function prepareForComparison(value,upperCase){return value?upperCase?value.toLocaleUpperCase():value:"";}function stringEquals(str1,str2,ignoreCase){if(str1===str2){return true;}return prepareForComparison(str1,ignoreCase).localeCompare(prepareForComparison(str2,ignoreCase))===0;}
/**
    * Class that represents a Uri and allows parsing/getting and setting of individual parts
    */
var Uri=(function(){
/**
        * Create a new Uri.
        *
        * @param uri Optional uri string to populate values with
        * @param options Options for parsing the uri string
        */
function Uri(uri,options){
/**
            * The uri scheme such as http or https
            */
this.scheme="";
/**
             * If true, do not emit the "//" separator after the scheme:
             * Set to true for schemes like mailto (e.g. mailto:foo@bar)
             */
this.noSchemeSeparator=false;
/**
            * The uri hostname (does not include port or scheme)
            */
this.host="";
/**
            * The port number of the uri as supplied in the url. 0 if left out in the url (e.g. the default port for the scheme).
            */
this.port=0;
/**
            * The relative path of the uri
            */
this.path="";
/**
            * The array of query parameters in the uri
            */
this.queryParameters=[];
/**
            * The hash string of the uri
            */
this.hashString="";if(uri){this._setFromUriString(uri,options);}}Uri.prototype._setFromUriString=function(uriString,options){var uri=uriString;
// Parse out the hash string

var hashSplit=this._singleSplit(uri,"#");if(hashSplit){uri=hashSplit.part1;this.hashString=this._decodeUriComponent(hashSplit.part2);}else{this.hashString="";}
// Parse the query parameters

var querySplit=this._singleSplit(uri,"?");if(querySplit){uri=querySplit.part1;this.queryString=querySplit.part2;}else{this.queryParameters=[];}this.scheme="";this.host="";this.port=0;this.path="";
// Parse out the scheme components of the uri

this.noSchemeSeparator=false;var schemeSplit=this._singleSplit(uri,":");if(schemeSplit){this.scheme=schemeSplit.part1;uri=schemeSplit.part2;if(uri.substr(0,2)==="//"){uri=uri.substr(2);
// Parse out the path part of the uri

var pathSplit=this._singleSplit(uri,"/");if(pathSplit){uri=pathSplit.part1;this.path=pathSplit.part2;}else{this.path="";}
// Parse out the port number

var portSplit=this._singleSplit(uri,":");if(portSplit){this.host=portSplit.part1;this.port=parseInt(portSplit.part2);if(isNaN(this.port)){
// Segment after : was not a port, consider it part of the path

this.host+=":";this.path=portSplit.part2+"/"+this.path;}}else{this.host=uri;}}else{
// No host for schemes like mailto: just use path

this.noSchemeSeparator=true;this.path=uri;}}else{
// Relative Url was given

this.path=uri;}if(options&&options.absoluteUriRequired&&!this.scheme){throw new Error("The uri string \""+uriString+"\" does not represent a valid absolute uri.");}};Uri.prototype._singleSplit=function(value,separator){var matchIndex=value.indexOf(separator);if(matchIndex>=0){return{part1:value.substr(0,matchIndex),part2:value.substr(matchIndex+1)};}else{return undefined;}};Uri.prototype._decodeUriComponent=function(value){if(value){
// Replace "+" character with %20.

value=value.replace(/\+/g,"%20");value=decodeURIComponent(value);}return value;};Object.defineProperty(Uri.prototype,"absoluteUri",{
/**
            * Get the absolute uri string for this Uri
            */
get:function(){var uri="";if(this.scheme){uri=encodeURI(decodeURI(this.scheme))+":";if(!this.noSchemeSeparator){uri+="//";}}if(this.host){uri+=encodeURI(decodeURI(this.host));if(this.port){uri+=":"+this.port;}if(!this.noSchemeSeparator||this.path){uri+="/";}}if(this.path){var encodedPath=void 0;if(this.noSchemeSeparator){
// Only do simple encoding for schemes like mailto: or blob: where

// we can't determine host versus path

encodedPath=encodeURI(decodeURI(this.path));}else{var parts=this.path.split('/');encodedPath=parts.map(function(p){return encodeURIComponent(decodeURIComponent(p));}).join("/");}if(this.host){uri=combineUrlPaths(uri,encodedPath);}else{uri=uri+encodedPath;}}var queryString=this.queryString;if(queryString){uri+="?"+queryString;}if(this.hashString){var params=this._splitStringIntoParams(this.hashString);var encodedString=this._getParamsAsString(params);uri+="#"+encodedString;}return uri;},
/**
            * Set the absolute uri string for this Uri. Replaces all existing values
            */
set:function(uri){this._setFromUriString(uri||"");},enumerable:true,configurable:true});
/**
         * Gets the effective port number, returning the default port number if omitted for the given scheme.
         */
Uri.prototype.getEffectivePort=function(){if(this.port){return this.port;}else{if(stringEquals(this.scheme,"http",true)){return 80;}else if(stringEquals(this.scheme,"https",true)){return 443;}else{return 0;}}};
/**
         * Builds an encoded key/value pair string
         * like query string or hash strings
         */
Uri.prototype._getParamsAsString=function(params){if(params&&params.length){return params.map(function(param){if(param.value!==null){return encodeURIComponent(param.name)+"="+encodeURIComponent(param.value);}else{return encodeURIComponent(param.name);}}).join("&");}else{return"";}};Object.defineProperty(Uri.prototype,"queryString",{
/**
            * Get the query string for this Uri.
            */
get:function(){return this._getParamsAsString(this.queryParameters);},
/**
            * Set the query string for this Uri. Replaces existing value
            */
set:function(queryString){this.queryParameters=this._splitStringIntoParams(queryString);},enumerable:true,configurable:true});
/**
         * Coverts a key/value pair string into parameters array
         * @param paramString String such as a=b&c=d
         */
Uri.prototype._splitStringIntoParams=function(paramString){var _this=this;var params=[];paramString.split('&').forEach(function(pair){if(pair){var valueSplit=_this._singleSplit(pair,"=");if(valueSplit){params.push({name:_this._decodeUriComponent(valueSplit.part1),value:_this._decodeUriComponent(valueSplit.part2)});}else{params.push({name:_this._decodeUriComponent(pair),value:null});}}});return params;};
/**
        * Get the value of the query parameter with the given key
        *
        * @param name Query parameter name
        */
Uri.prototype.getQueryParam=function(name){var value;if(this.queryParameters){var matchingPairs=this.queryParameters.filter(function(p){return stringEquals(p.name,name,true);});if(matchingPairs.length>0){value=matchingPairs[0].value;}}return value;};
/**
         * Adds a query string parameter to the current uri
         *
         * @param name The Query parameter name
         * @param value The Query parameter value
         * @param replaceExisting If true, replace all existing parameters with the same name
         */
Uri.prototype.addQueryParam=function(name,value,replaceExisting){if(replaceExisting){this.removeQueryParam(name);}if(!this.queryParameters){this.queryParameters=[];}this.queryParameters.push({name:name,value:value});};
/**
         * Adds query string parameters to the current uri
         *
         * @param parameters Query parameters to add
         * @param replaceExisting If true, replace all existing parameters with the same name
         * @param keyPrefix If specified, a value to prepend to all query parameter keys
         */
Uri.prototype.addQueryParams=function(parameters,replaceExisting,keyPrefix){var _this=this;var _loop_1=function(key){var value=__WRAPPED_get(parameters,key);if(value!==null&&value!==undefined){var keyWithPrefix_1=(keyPrefix||"")+key;if(value instanceof Date){this_1.addQueryParam(keyWithPrefix_1,value.toJSON(),replaceExisting);}else if(Array.isArray(value)){value.forEach(function(v){return _this.addQueryParam(keyWithPrefix_1,""+v,replaceExisting);});}else if(typeof value==="object"){this_1.addQueryParams(value,replaceExisting,keyWithPrefix_1+".");}else{this_1.addQueryParam(keyWithPrefix_1,""+value,replaceExisting);}}};var this_1=this;for(var key in parameters){_loop_1(key);}};
/**
         * Removes a query string parameter
         *
         * @param name The Query parameter name
         */
Uri.prototype.removeQueryParam=function(name){if(this.queryParameters){this.queryParameters=this.queryParameters.filter(function(p){return!stringEquals(p.name,name,true);});}};return Uri;}());exports.Uri=Uri;
/**
     * Take url segments and join them with a single slash character. Takes care of path segements that start and/or end
     * with a slash to ensure that the resulting URL does not have double-slashes
     *
     * @param paths Path segments to concatenate
     */
function combineUrlPaths(){var paths=[];for(var _i=0;_i<arguments.length;_i++){__WRAPPED_set(paths,_i,'=',__WRAPPED_get(arguments,_i));}var segmentsToJoin=[];
// Trim leading and trailing slash in each segment

for(var i=0,last=paths.length-1;i<=last;i++){var path=__WRAPPED_get(paths,i);if(path){if(path==="/"&&(i===0||i===last)){
// For a "/" segment at the beginning or end of the list, insert an empty entry to force

// a leading or trailing slash in the resulting URL

segmentsToJoin.push("");}else{if(i>0&&path[0]==="/"){
// Trim leading slash in any segment except the first one

path=path.substr(1);}if(i<last&&path[path.length-1]==="/"){
// Trim trailing slash in any segment except the last one

path=path.substr(0,path.length-1);}if(path){segmentsToJoin.push(path);}}}}if(segmentsToJoin.length===1&&segmentsToJoin[0]===""){return"/";}
// Join segments by slash

return segmentsToJoin.join("/");}exports.combineUrlPaths=combineUrlPaths;
/**
     * Parse a route template into a structure that can be used to quickly do route replacements
     *
     * @param routeTemplate MVC route template string (like "/foo/{id}/{*params}")
     */
function parseRouteTemplate(routeTemplate){var parsedRoute={segments:[]};var paramStartIndex=-1;var segmentStartIndex=-1;var segmentPrefix="";for(var charIndex=0,routeTemplateLen=routeTemplate.length;charIndex<routeTemplateLen;charIndex++){var c=routeTemplate.charCodeAt(charIndex);if(paramStartIndex>=0){if(c===125 /* endCurlyBrace */){var paramName=routeTemplate.substring(paramStartIndex,charIndex);var isWildCardParam=false;if(paramName.charCodeAt(0)===42 /* asterisk */){paramName=paramName.substr(1);isWildCardParam=true;}parsedRoute.segments.push({paramName:paramName,isWildCardParam:isWildCardParam});paramStartIndex=-1;}}else{if(c===123 /* startCurlyBrace */&&routeTemplate.charCodeAt(charIndex+1)!==123 /* startCurlyBrace */){
// Start of a parameter

if(segmentPrefix||segmentStartIndex>=0){
// Store the previous segment

var segmentText=segmentPrefix;if(segmentStartIndex>=0){segmentText+=routeTemplate.substring(segmentStartIndex,charIndex);}if(segmentText){parsedRoute.segments.push({text:segmentText});}
// Reset the segment tracking info

segmentStartIndex=-1;segmentPrefix="";}paramStartIndex=charIndex+1;}else{
// Handle double {{ or double }} as an escape sequence. This is rare. For simplicity we will 

if(c===123 /* startCurlyBrace */&&routeTemplate.charCodeAt(charIndex+1)===123 /* startCurlyBrace */||c===125 /* endCurlyBrace */&&routeTemplate.charCodeAt(charIndex+1)===125 /* endCurlyBrace */){segmentPrefix=segmentPrefix+routeTemplate.substring(segmentStartIndex>=0?segmentStartIndex:charIndex,charIndex+1);segmentStartIndex=-1;charIndex++;}if(segmentStartIndex<0){segmentStartIndex=charIndex;}}}}
// Store any pending segment

if(segmentStartIndex>=0||paramStartIndex>=0){var segmentText=segmentPrefix+routeTemplate.substring(segmentStartIndex>=0?segmentStartIndex:paramStartIndex);if(segmentText){parsedRoute.segments.push({text:segmentText});}}
// Mark any param as required if it has a text segment (other than just "/") after it

var required=false;for(var i=parsedRoute.segments.length-1;i>=0;i--){var segment=__WRAPPED_get(parsedRoute.segments,i);if(segment.text&&segment.text!=="/"){required=true;}else if(required&&segment.paramName){segment.isRequiredParam=true;}}return parsedRoute;}exports.parseRouteTemplate=parseRouteTemplate;
/**
     * Take a set of routes and route values and form a url using the best match. The best match
     * is the route with the highest number of replacements (of the given routeValues dictionary).
     * In the event of a tie (same number of replacements) the route that came first wins.
     *
     * @param routeCollection Array of parsed routes
     * @param routeValues Replacement values
     */
function routeUrl(routeCollection,routeValues){var bestMatch=getBestRouteMatch(routeCollection,routeValues);if(!bestMatch){return"";}var uri=new Uri(bestMatch.url);for(var routeValueKey in routeValues){if(!__WRAPPED_get(bestMatch.matchedParameters,routeValueKey)){uri.addQueryParam(routeValueKey,__WRAPPED_get(routeValues,routeValueKey));}}return uri.absoluteUri;}exports.routeUrl=routeUrl;
/**
     * Take a set of routes and find the best match. The best match is the route with the highest number of replacements
     * (of the given routeValues dictionary). In the event of a tie (same number of replacements) the route that came first wins.
     *
     * @param routeCollection Array of parsed routes
     * @param routeValues Replacement values
     */
function getBestRouteMatch(routeCollection,routeValues){var bestMatch;var totalRouteValues=Object.keys(routeValues).length;for(var _i=0,routeCollection_1=routeCollection;_i<routeCollection_1.length;_i++){var route=__WRAPPED_get(routeCollection_1,_i);var match=replaceParsedRouteValues(route,routeValues,false);if(match&&(!bestMatch||match.matchedParametersCount>bestMatch.matchedParametersCount)){bestMatch=match;if(match.matchedParametersCount===totalRouteValues){
// This route matched all route values. Return its url directly (no need to even add query params)

return bestMatch;}}}return bestMatch;}exports.getBestRouteMatch=getBestRouteMatch;
/**
     * Replace route values for a specific parsed route
     *
     * @param parsedRoute The route to evaluate
     * @param routeValues Dictionary of route replacement parameters
     * @param continueOnUnmatchedSegements If true, continue with replacements even after a miss. By default (false), stop replacements once a parameter is not present.
     */
function replaceParsedRouteValues(parsedRoute,routeValues,continueOnUnmatchedSegements){var urlParts=[];var matchedParameters={};var matchedParametersCount=0;for(var segmentIndex=0,l=parsedRoute.segments.length;segmentIndex<l;segmentIndex++){var segment=__WRAPPED_get(parsedRoute.segments,segmentIndex);if(segment.text){var segmentText=segment.text;if(continueOnUnmatchedSegements){
// Make sure we don't have consecutive slash (/) characters in the case of missing segments

if(segmentIndex>0&&segmentText.charAt(0)==="/"){if(urlParts.length===0){
// First text segment after one or more missing parameter segments. Remove the leading slash.

segmentText=segmentText.substr(1);}}}if(segmentText){urlParts.push(segmentText);}}else{var value=__WRAPPED_get(routeValues,segment.paramName);if(!value&&value!==0){
// The route value was not supplied

if(!continueOnUnmatchedSegements){if(segment.isRequiredParam){
// This is a required parameter. Return undefined since this route was not a match.

return undefined;}else{
// This is an omitted optional parameter. Return what we've computed so far.

break;}}else if(urlParts.length){
// Unmatched segment being omitted. Remove any previously trailing slash

var lastSegment=urlParts[urlParts.length-1];if(lastSegment[lastSegment.length-1]==="/"){urlParts[urlParts.length-1]=lastSegment.substr(0,lastSegment.length-1);}}}else{urlParts.push(segment.isWildCardParam?encodeURI(""+value):encodeURIComponent(""+value));__WRAPPED_set(matchedParameters,segment.paramName,'=',true);matchedParametersCount++;}}}return{url:urlParts.join(""),matchedParameters:matchedParameters,matchedParametersCount:matchedParametersCount};}exports.replaceParsedRouteValues=replaceParsedRouteValues;
/**
     * Take an MVC route template (like "/foo/{id}/{*params}") and replace the templated parts with values from the given dictionary
     *
     * @param routeTemplate MVC route template (like "/foo/{id}/{*params}")
     * @param routeValues Route value replacements
     */
function replaceRouteValues(routeTemplate,routeValues){var parsedRoute=parseRouteTemplate(routeTemplate);return replaceParsedRouteValues(parsedRoute,routeValues,true).url;}exports.replaceRouteValues=replaceRouteValues;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/6101:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(1690),__webpack_require__(1023)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,Client_1,CommonServices_1){"use strict";function __export(m){for(var p in m)if(!exports.hasOwnProperty(p))__WRAPPED_set(exports,p,'=',__WRAPPED_get(m,p));}Object.defineProperty(exports,"__esModule",{value:true});__export(Client_1);__export(CommonServices_1);}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/2379:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
var __extends=this&&this.__extends||(function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))__WRAPPED_set(d,p,'=',__WRAPPED_get(b,p));};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}());var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(7431)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,RestClientBase_1){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var GitRestClient=(function(_super){__extends(GitRestClient,_super);function GitRestClient(options){return _super.call(this,options)||this;}
/**
         * Create an annotated tag.
         *
         * @param tagObject - Object containing details of tag to be created.
         * @param project - Project ID or project name
         * @param repositoryId - ID or name of the repository.
         */
GitRestClient.prototype.createAnnotatedTag=function(tagObject,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/annotatedTags/{objectId}",routeValues:{project:project,repositoryId:repositoryId},body:tagObject})];});});};
/**
         * Get an annotated tag.
         *
         * @param project - Project ID or project name
         * @param repositoryId - ID or name of the repository.
         * @param objectId - ObjectId (Sha1Id) of tag to get.
         */
GitRestClient.prototype.getAnnotatedTag=function(project,repositoryId,objectId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/annotatedTags/{objectId}",routeValues:{project:project,repositoryId:repositoryId,objectId:objectId}})];});});};
/**
         * Get a single blob.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
         * @param project - Project ID or project name
         * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
         * @param fileName - Provide a fileName to use for a download.
         * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
         */
GitRestClient.prototype.getBlob=function(repositoryId,sha1,project,download,fileName,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={download:download,fileName:fileName,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",routeValues:{project:project,repositoryId:repositoryId,sha1:sha1},queryParams:queryValues})];});});};
/**
         * Get a single blob.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
         * @param project - Project ID or project name
         * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
         * @param fileName - Provide a fileName to use for a download.
         * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
         */
GitRestClient.prototype.getBlobContent=function(repositoryId,sha1,project,download,fileName,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={download:download,fileName:fileName,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/octet-stream",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",routeValues:{project:project,repositoryId:repositoryId,sha1:sha1},queryParams:queryValues})];});});};
/**
         * Gets one or more blobs in a zip file download.
         *
         * @param blobIds - Blob IDs (SHA1 hashes) to be returned in the zip file.
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param filename -
         */
GitRestClient.prototype.getBlobsZip=function(blobIds,repositoryId,project,filename){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={filename:filename};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",httpResponseType:"application/zip",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues,body:blobIds})];});});};
/**
         * Get a single blob.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
         * @param project - Project ID or project name
         * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
         * @param fileName - Provide a fileName to use for a download.
         * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
         */
GitRestClient.prototype.getBlobZip=function(repositoryId,sha1,project,download,fileName,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={download:download,fileName:fileName,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/zip",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",routeValues:{project:project,repositoryId:repositoryId,sha1:sha1},queryParams:queryValues})];});});};
/**
         * Retrieve statistics about a single branch.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param name - Name of the branch.
         * @param project - Project ID or project name
         * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
         */
GitRestClient.prototype.getBranch=function(repositoryId,name,project,baseVersionDescriptor){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={name:name,baseVersionDescriptor:baseVersionDescriptor};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/stats/branches",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve statistics about all branches within a repository.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
         */
GitRestClient.prototype.getBranches=function(repositoryId,project,baseVersionDescriptor){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={baseVersionDescriptor:baseVersionDescriptor};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/stats/branches",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * @param searchCriteria -
         * @param repositoryId -
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getBranchStatsBatch=function(searchCriteria,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/stats/branches",routeValues:{project:project,repositoryId:repositoryId},body:searchCriteria})];});});};
/**
         * Retrieve changes for a particular commit.
         *
         * @param commitId - The id of the commit.
         * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         * @param project - Project ID or project name
         * @param top - The maximum number of changes to return.
         * @param skip - The number of changes to skip.
         */
GitRestClient.prototype.getChanges=function(commitId,repositoryId,project,top,skip){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={top:top,skip:skip};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Changes",routeValues:{project:project,commitId:commitId,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Given a commitId, returns a list of commits that are in the same cherry-pick family.
         *
         * @param repositoryNameOrId -
         * @param commitId -
         * @param project - Project ID or project name
         * @param includeLinks -
         */
GitRestClient.prototype.getCherryPickRelationships=function(repositoryNameOrId,commitId,project,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/cherryPickRelationships/{commitId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId,commitId:commitId},queryParams:queryValues})];});});};
/**
         * Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
         *
         * @param cherryPickToCreate -
         * @param project - Project ID or project name
         * @param repositoryId - ID of the repository.
         */
GitRestClient.prototype.createCherryPick=function(cherryPickToCreate,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",routeValues:{project:project,repositoryId:repositoryId},body:cherryPickToCreate})];});});};
/**
         * Retrieve information about a cherry pick by cherry pick Id.
         *
         * @param project - Project ID or project name
         * @param cherryPickId - ID of the cherry pick.
         * @param repositoryId - ID of the repository.
         */
GitRestClient.prototype.getCherryPick=function(project,cherryPickId,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",routeValues:{project:project,cherryPickId:cherryPickId,repositoryId:repositoryId}})];});});};
/**
         * Retrieve information about a cherry pick for a specific branch.
         *
         * @param project - Project ID or project name
         * @param repositoryId - ID of the repository.
         * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
         */
GitRestClient.prototype.getCherryPickForRefName=function(project,repositoryId,refName){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={refName:refName};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Find the closest common commit (the merge base) between base and target commits, and get the diff between either the base and target commits or common and target commits.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param diffCommonCommit - If true, diff between common and target commits. If false, diff between base and target commits.
         * @param top - Maximum number of changes to return. Defaults to 100.
         * @param skip - Number of changes to skip
         * @param baseVersionDescriptor - Descriptor for base commit.
         * @param targetVersionDescriptor - Descriptor for target commit.
         */
GitRestClient.prototype.getCommitDiffs=function(repositoryId,project,diffCommonCommit,top,skip,baseVersionDescriptor,targetVersionDescriptor){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={diffCommonCommit:diffCommonCommit,'$top':top,'$skip':skip,baseVersionDescriptor:baseVersionDescriptor,targetVersionDescriptor:targetVersionDescriptor};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/diffs/commits",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve a particular commit.
         *
         * @param commitId - The id of the commit.
         * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         * @param project - Project ID or project name
         * @param changeCount - The number of changes to include in the result.
         */
GitRestClient.prototype.getCommit=function(commitId,repositoryId,project,changeCount){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={changeCount:changeCount};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",routeValues:{project:project,commitId:commitId,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve git commits for a project
         *
         * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         * @param searchCriteria -
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getCommits=function(repositoryId,searchCriteria,project){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={searchCriteria:searchCriteria};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve a list of commits associated with a particular push.
         *
         * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
         * @param pushId - The id of the push.
         * @param project - Project ID or project name
         * @param top - The maximum number of commits to return ("get the top x commits").
         * @param skip - The number of commits to skip.
         * @param includeLinks - Set to false to avoid including REST Url links for resources. Defaults to true.
         */
GitRestClient.prototype.getPushCommits=function(repositoryId,pushId,project,top,skip,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={pushId:pushId,top:top,skip:skip,includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve git commits for a project matching the search criteria
         *
         * @param searchCriteria - Search options
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param skip - Number of commits to skip.
         * @param top - Maximum number of commits to return.
         * @param includeStatuses - True to include additional commit status information.
         */
GitRestClient.prototype.getCommitsBatch=function(searchCriteria,repositoryId,project,skip,top,includeStatuses){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$skip':skip,'$top':top,includeStatuses:includeStatuses};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/CommitsBatch",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues,body:searchCriteria})];});});};
/**
         * Retrieve deleted git repositories.
         *
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getDeletedRepositories=function(project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/DeletedRepositories",routeValues:{project:project}})];});});};
/**
         * Get the file diffs for each of the specified files
         *
         * @param fileDiffsCriteria - List of file parameters objects
         * @param project - Project ID or project name
         * @param repositoryId - The name or ID of the repository
         */
GitRestClient.prototype.getFileDiffs=function(fileDiffsCriteria,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/FileDiffs",routeValues:{project:project,repositoryId:repositoryId},body:fileDiffsCriteria})];});});};
/**
         * Retrieve all forks of a repository in the collection.
         *
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param collectionId - Team project collection ID.
         * @param project - Project ID or project name
         * @param includeLinks - True to include links.
         */
GitRestClient.prototype.getForks=function(repositoryNameOrId,collectionId,project,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/forks/{collectionId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId,collectionId:collectionId},queryParams:queryValues})];});});};
/**
         * Request that another repository's refs be fetched into this one. It syncs two existing forks. To create a fork, please see the \<a href="https://docs.microsoft.com/en-us/rest/api/vsts/git/repositories/create?view=azure-devops-rest-5.1"\> repositories endpoint\</a\>
         *
         * @param syncParams - Source repository and ref mapping.
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param includeLinks - True to include links
         */
GitRestClient.prototype.createForkSyncRequest=function(syncParams,repositoryNameOrId,project,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId},queryParams:queryValues,body:syncParams})];});});};
/**
         * Get a specific fork sync operation's details.
         *
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param forkSyncOperationId - OperationId of the sync request.
         * @param project - Project ID or project name
         * @param includeLinks - True to include links.
         */
GitRestClient.prototype.getForkSyncRequest=function(repositoryNameOrId,forkSyncOperationId,project,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId,forkSyncOperationId:forkSyncOperationId},queryParams:queryValues})];});});};
/**
         * Retrieve all requested fork sync operations on this repository.
         *
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param includeAbandoned - True to include abandoned requests.
         * @param includeLinks - True to include links.
         */
GitRestClient.prototype.getForkSyncRequests=function(repositoryNameOrId,project,includeAbandoned,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeAbandoned:includeAbandoned,includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId},queryParams:queryValues})];});});};
/**
         * Create an import request.
         *
         * @param importRequest - The import request to create.
         * @param project - Project ID or project name
         * @param repositoryId - The name or ID of the repository.
         */
GitRestClient.prototype.createImportRequest=function(importRequest,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",routeValues:{project:project,repositoryId:repositoryId},body:importRequest})];});});};
/**
         * Retrieve a particular import request.
         *
         * @param project - Project ID or project name
         * @param repositoryId - The name or ID of the repository.
         * @param importRequestId - The unique identifier for the import request.
         */
GitRestClient.prototype.getImportRequest=function(project,repositoryId,importRequestId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",routeValues:{project:project,repositoryId:repositoryId,importRequestId:importRequestId}})];});});};
/**
         * Retrieve import requests for a repository.
         *
         * @param project - Project ID or project name
         * @param repositoryId - The name or ID of the repository.
         * @param includeAbandoned - True to include abandoned import requests in the results.
         */
GitRestClient.prototype.queryImportRequests=function(project,repositoryId,includeAbandoned){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeAbandoned:includeAbandoned};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retry or abandon a failed import request.
         *
         * @param importRequestToUpdate - The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
         * @param project - Project ID or project name
         * @param repositoryId - The name or ID of the repository.
         * @param importRequestId - The unique identifier for the import request to update.
         */
GitRestClient.prototype.updateImportRequest=function(importRequestToUpdate,project,repositoryId,importRequestId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",routeValues:{project:project,repositoryId:repositoryId,importRequestId:importRequestId},body:importRequestToUpdate})];});});};
/**
         * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param path - The item path.
         * @param project - Project ID or project name
         * @param scopePath - The path scope.  The default is null.
         * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
         * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
         * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
         * @param download - Set to true to download the response as a file.  Default is false.
         * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
         * @param includeContent - Set to true to include item content when requesting json.  Default is false.
         * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
         */
GitRestClient.prototype.getItem=function(repositoryId,path,project,scopePath,recursionLevel,includeContentMetadata,latestProcessedChange,download,versionDescriptor,includeContent,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={path:path,scopePath:scopePath,recursionLevel:recursionLevel,includeContentMetadata:includeContentMetadata,latestProcessedChange:latestProcessedChange,download:download,versionDescriptor:versionDescriptor,includeContent:includeContent,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param path - The item path.
         * @param project - Project ID or project name
         * @param scopePath - The path scope.  The default is null.
         * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
         * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
         * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
         * @param download - Set to true to download the response as a file.  Default is false.
         * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
         * @param includeContent - Set to true to include item content when requesting json.  Default is false.
         * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
         */
GitRestClient.prototype.getItemContent=function(repositoryId,path,project,scopePath,recursionLevel,includeContentMetadata,latestProcessedChange,download,versionDescriptor,includeContent,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={path:path,scopePath:scopePath,recursionLevel:recursionLevel,includeContentMetadata:includeContentMetadata,latestProcessedChange:latestProcessedChange,download:download,versionDescriptor:versionDescriptor,includeContent:includeContent,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/octet-stream",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param scopePath - The path scope.  The default is null.
         * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
         * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
         * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
         * @param download - Set to true to download the response as a file.  Default is false.
         * @param includeLinks - Set to true to include links to items.  Default is false.
         * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
         */
GitRestClient.prototype.getItems=function(repositoryId,project,scopePath,recursionLevel,includeContentMetadata,latestProcessedChange,download,includeLinks,versionDescriptor){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={scopePath:scopePath,recursionLevel:recursionLevel,includeContentMetadata:includeContentMetadata,latestProcessedChange:latestProcessedChange,download:download,includeLinks:includeLinks,versionDescriptor:versionDescriptor};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param path - The item path.
         * @param project - Project ID or project name
         * @param scopePath - The path scope.  The default is null.
         * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
         * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
         * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
         * @param download - Set to true to download the response as a file.  Default is false.
         * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
         * @param includeContent - Set to true to include item content when requesting json.  Default is false.
         * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
         */
GitRestClient.prototype.getItemText=function(repositoryId,path,project,scopePath,recursionLevel,includeContentMetadata,latestProcessedChange,download,versionDescriptor,includeContent,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={path:path,scopePath:scopePath,recursionLevel:recursionLevel,includeContentMetadata:includeContentMetadata,latestProcessedChange:latestProcessedChange,download:download,versionDescriptor:versionDescriptor,includeContent:includeContent,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"text/plain",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param path - The item path.
         * @param project - Project ID or project name
         * @param scopePath - The path scope.  The default is null.
         * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
         * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
         * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
         * @param download - Set to true to download the response as a file.  Default is false.
         * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
         * @param includeContent - Set to true to include item content when requesting json.  Default is false.
         * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
         */
GitRestClient.prototype.getItemZip=function(repositoryId,path,project,scopePath,recursionLevel,includeContentMetadata,latestProcessedChange,download,versionDescriptor,includeContent,resolveLfs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={path:path,scopePath:scopePath,recursionLevel:recursionLevel,includeContentMetadata:includeContentMetadata,latestProcessedChange:latestProcessedChange,download:download,versionDescriptor:versionDescriptor,includeContent:includeContent,resolveLfs:resolveLfs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/zip",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
         *
         * @param requestData - Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
         * @param repositoryId - The name or ID of the repository
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getItemsBatch=function(requestData,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/ItemsBatch",routeValues:{project:project,repositoryId:repositoryId},body:requestData})];});});};
/**
         * Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
         *
         * @param repositoryNameOrId - ID or name of the local repository.
         * @param commitId - First commit, usually the tip of the target branch of the potential merge.
         * @param otherCommitId - Other commit, usually the tip of the source branch of the potential merge.
         * @param project - Project ID or project name
         * @param otherCollectionId - The collection ID where otherCommitId lives.
         * @param otherRepositoryId - The repository ID where otherCommitId lives.
         */
GitRestClient.prototype.getMergeBases=function(repositoryNameOrId,commitId,otherCommitId,project,otherCollectionId,otherRepositoryId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={otherCommitId:otherCommitId,otherCollectionId:otherCollectionId,otherRepositoryId:otherRepositoryId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/commits/{commitId}/mergeBases",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId,commitId:commitId},queryParams:queryValues})];});});};
/**
         * Request a git merge operation. Currently we support merging only 2 commits.
         *
         * @param mergeParameters - Parents commitIds and merge commit messsage.
         * @param project - Project ID or project name
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param includeLinks - True to include links
         */
GitRestClient.prototype.createMergeRequest=function(mergeParameters,project,repositoryNameOrId,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/merges/{mergeOperationId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId},queryParams:queryValues,body:mergeParameters})];});});};
/**
         * Get a specific merge operation's details.
         *
         * @param project - Project ID or project name
         * @param repositoryNameOrId - The name or ID of the repository.
         * @param mergeOperationId - OperationId of the merge request.
         * @param includeLinks - True to include links
         */
GitRestClient.prototype.getMergeRequest=function(project,repositoryNameOrId,mergeOperationId,includeLinks){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryNameOrId}/merges/{mergeOperationId}",routeValues:{project:project,repositoryNameOrId:repositoryNameOrId,mergeOperationId:mergeOperationId},queryParams:queryValues})];});});};
/**
         * Attach a new file to a pull request.
         *
         * @param content - Content to upload
         * @param fileName - The name of the file.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createAttachment=function(content,fileName,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",routeValues:{project:project,fileName:fileName,repositoryId:repositoryId,pullRequestId:pullRequestId},customHeaders:{"Content-Type":"application/octet-stream"},body:content,isRawData:true})];});});};
/**
         * Delete a pull request attachment.
         *
         * @param fileName - The name of the attachment to delete.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deleteAttachment=function(fileName,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",routeValues:{project:project,fileName:fileName,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Get the file content of a pull request attachment.
         *
         * @param fileName - The name of the attachment.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getAttachmentContent=function(fileName,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/octet-stream",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",routeValues:{project:project,fileName:fileName,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Get a list of files attached to a given pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getAttachments=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Get the file content of a pull request attachment.
         *
         * @param fileName - The name of the attachment.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getAttachmentZip=function(fileName,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/zip",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",routeValues:{project:project,fileName:fileName,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Add a like on a comment.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - The ID of the thread that contains the comment.
         * @param commentId - The ID of the comment.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createLike=function(repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId}})];});});};
/**
         * Delete a like on a comment.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - The ID of the thread that contains the comment.
         * @param commentId - The ID of the comment.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deleteLike=function(repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId}})];});});};
/**
         * Get likes for a comment.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - The ID of the thread that contains the comment.
         * @param commentId - The ID of the comment.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getLikes=function(repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId}})];});});};
/**
         * Get the commits for the specified iteration of a pull request.
         *
         * @param repositoryId - ID or name of the repository.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the iteration from which to get the commits.
         * @param project - Project ID or project name
         * @param top - Maximum number of commits to return. The maximum number of commits that can be returned per batch is 500.
         * @param skip - Number of commits to skip.
         */
GitRestClient.prototype.getPullRequestIterationCommits=function(repositoryId,pullRequestId,iterationId,project,top,skip){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={top:top,skip:skip};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/commits",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId},queryParams:queryValues})];});});};
/**
         * Get the commits for the specified pull request.
         *
         * @param repositoryId - ID or name of the repository.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestCommits=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/commits",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Retrieve one conflict for a pull request by ID
         *
         * @param repositoryId -
         * @param pullRequestId -
         * @param conflictId -
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestConflict=function(repositoryId,pullRequestId,conflictId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,conflictId:conflictId}})];});});};
/**
         * Retrieve all conflicts for a pull request
         *
         * @param repositoryId -
         * @param pullRequestId -
         * @param project - Project ID or project name
         * @param skip -
         * @param top -
         * @param includeObsolete -
         * @param excludeResolved -
         * @param onlyResolved -
         */
GitRestClient.prototype.getPullRequestConflicts=function(repositoryId,pullRequestId,project,skip,top,includeObsolete,excludeResolved,onlyResolved){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$skip':skip,'$top':top,includeObsolete:includeObsolete,excludeResolved:excludeResolved,onlyResolved:onlyResolved};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues})];});});};
/**
         * Update merge conflict resolution
         *
         * @param conflict -
         * @param repositoryId -
         * @param pullRequestId -
         * @param conflictId -
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestConflict=function(conflict,repositoryId,pullRequestId,conflictId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,conflictId:conflictId},body:conflict})];});});};
/**
         * Update multiple merge conflict resolutions
         *
         * @param conflictUpdates -
         * @param repositoryId -
         * @param pullRequestId -
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestConflicts=function(conflictUpdates,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:conflictUpdates})];});});};
/**
         * Retrieve the changes made in a pull request between two iterations.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration. \<br /\> Iteration IDs are zero-based with zero indicating the common commit between the source and target branches. Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch.
         * @param project - Project ID or project name
         * @param top - Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
         * @param skip - Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
         * @param compareTo - ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
         */
GitRestClient.prototype.getPullRequestIterationChanges=function(repositoryId,pullRequestId,iterationId,project,top,skip,compareTo){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$top':top,'$skip':skip,'$compareTo':compareTo};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/changes",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId},queryParams:queryValues})];});});};
/**
         * Get the specified iteration for a pull request.
         *
         * @param repositoryId - ID or name of the repository.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration to return.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestIteration=function(repositoryId,pullRequestId,iterationId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId}})];});});};
/**
         * Get the list of iterations for the specified pull request.
         *
         * @param repositoryId - ID or name of the repository.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         * @param includeCommits - If true, include the commits associated with each iteration in the response.
         */
GitRestClient.prototype.getPullRequestIterations=function(repositoryId,pullRequestId,project,includeCommits){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeCommits:includeCommits};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues})];});});};
/**
         * Create a pull request status on the iteration. This operation will have the same result as Create status on pull request with specified iteration ID in the request body.
         *
         * @param status - Pull request status to create.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createPullRequestIterationStatus=function(status,repositoryId,pullRequestId,iterationId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId},body:status})];});});};
/**
         * Delete pull request iteration status.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration.
         * @param statusId - ID of the pull request status.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deletePullRequestIterationStatus=function(repositoryId,pullRequestId,iterationId,statusId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId,statusId:statusId}})];});});};
/**
         * Get the specific pull request iteration status by ID. The status ID is unique within the pull request across all iterations.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration.
         * @param statusId - ID of the pull request status.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestIterationStatus=function(repositoryId,pullRequestId,iterationId,statusId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId,statusId:statusId}})];});});};
/**
         * Get all the statuses associated with a pull request iteration.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestIterationStatuses=function(repositoryId,pullRequestId,iterationId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId}})];});});};
/**
         * Update pull request iteration statuses collection. The only supported operation type is \`remove\`.
         *
         * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param iterationId - ID of the pull request iteration.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestIterationStatuses=function(patchDocument,repositoryId,pullRequestId,iterationId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,iterationId:iterationId},customHeaders:{"Content-Type":"application/json-patch+json"},body:patchDocument})];});});};
/**
         * Create a label for a specified pull request. The only required field is the name of the new label.
         *
         * @param label - Label to assign to the pull request.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         * @param projectId - Project ID or project name.
         */
GitRestClient.prototype.createPullRequestLabel=function(label,repositoryId,pullRequestId,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues,body:label})];});});};
/**
         * Removes a label from the set of those assigned to the pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param labelIdOrName - The name or ID of the label requested.
         * @param project - Project ID or project name
         * @param projectId - Project ID or project name.
         */
GitRestClient.prototype.deletePullRequestLabels=function(repositoryId,pullRequestId,labelIdOrName,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,labelIdOrName:labelIdOrName},queryParams:queryValues})];});});};
/**
         * Retrieves a single label that has been assigned to a pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param labelIdOrName - The name or ID of the label requested.
         * @param project - Project ID or project name
         * @param projectId - Project ID or project name.
         */
GitRestClient.prototype.getPullRequestLabel=function(repositoryId,pullRequestId,labelIdOrName,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,labelIdOrName:labelIdOrName},queryParams:queryValues})];});});};
/**
         * Get all the labels assigned to a pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         * @param projectId - Project ID or project name.
         */
GitRestClient.prototype.getPullRequestLabels=function(repositoryId,pullRequestId,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues})];});});};
/**
         * Get external properties of the pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestProperties=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Create or update pull request external properties. The patch operation can be \`add\`, \`replace\` or \`remove\`. For \`add\` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For \`replace\` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For \`remove\` operation, the path cannot be empty. If the path does not exist, no action will be performed.
         *
         * @param patchDocument - Properties to add, replace or remove in JSON Patch format.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestProperties=function(patchDocument,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},customHeaders:{"Content-Type":"application/json-patch+json"},body:patchDocument})];});});};
/**
         * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -\> pull requests.
         *
         * @param queries - The list of queries to perform.
         * @param repositoryId - ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestQuery=function(queries,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/PullRequestQuery",routeValues:{project:project,repositoryId:repositoryId},body:queries})];});});};
/**
         * Add a reviewer to a pull request or cast a vote.
         *
         * @param reviewer - Reviewer's vote.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.\<br /\>Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param reviewerId - ID of the reviewer.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createPullRequestReviewer=function(reviewer,repositoryId,pullRequestId,reviewerId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PUT",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,reviewerId:reviewerId},body:reviewer})];});});};
/**
         * Add reviewers to a pull request.
         *
         * @param reviewers - Reviewers to add to the pull request.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createPullRequestReviewers=function(reviewers,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:reviewers})];});});};
/**
         * Remove a reviewer from a pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param reviewerId - ID of the reviewer to remove.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deletePullRequestReviewer=function(repositoryId,pullRequestId,reviewerId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,reviewerId:reviewerId}})];});});};
/**
         * Retrieve information about a particular reviewer on a pull request
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param reviewerId - ID of the reviewer.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestReviewer=function(repositoryId,pullRequestId,reviewerId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,reviewerId:reviewerId}})];});});};
/**
         * Retrieve the reviewers for a pull request
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestReviewers=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Edit a reviewer entry. These fields are patchable: isFlagged
         *
         * @param reviewer - Reviewer data.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param reviewerId - ID of the reviewer.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestReviewer=function(reviewer,repositoryId,pullRequestId,reviewerId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,reviewerId:reviewerId},body:reviewer})];});});};
/**
         * Reset the votes of multiple reviewers on a pull request.  NOTE: This endpoint only supports updating votes, but does not support updating required reviewers (use policy) or display names.
         *
         * @param patchVotes - IDs of the reviewers whose votes will be reset to zero
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestReviewers=function(patchVotes,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:patchVotes})];});});};
/**
         * Retrieve a pull request.
         *
         * @param pullRequestId - The ID of the pull request to retrieve.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestById=function(pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/pullRequests/{pullRequestId}",routeValues:{project:project,pullRequestId:pullRequestId}})];});});};
/**
         * Retrieve all pull requests matching a specified criteria.
         *
         * @param project - Project ID or project name
         * @param searchCriteria - Pull requests will be returned that match this search criteria.
         * @param maxCommentLength - Not used.
         * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         * @param top - The number of pull requests to retrieve.
         */
GitRestClient.prototype.getPullRequestsByProject=function(project,searchCriteria,maxCommentLength,skip,top){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={searchCriteria:searchCriteria,maxCommentLength:maxCommentLength,'$skip':skip,'$top':top};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/pullRequests",routeValues:{project:project},queryParams:queryValues})];});});};
/**
         * Create a pull request.
         *
         * @param gitPullRequestToCreate - The pull request to create.
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param project - Project ID or project name
         * @param supportsIterations - If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
         */
GitRestClient.prototype.createPullRequest=function(gitPullRequestToCreate,repositoryId,project,supportsIterations){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={supportsIterations:supportsIterations};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues,body:gitPullRequestToCreate})];});});};
/**
         * Retrieve a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - The ID of the pull request to retrieve.
         * @param project - Project ID or project name
         * @param maxCommentLength - Not used.
         * @param skip - Not used.
         * @param top - Not used.
         * @param includeCommits - If true, the pull request will be returned with the associated commits.
         * @param includeWorkItemRefs - If true, the pull request will be returned with the associated work item references.
         */
GitRestClient.prototype.getPullRequest=function(repositoryId,pullRequestId,project,maxCommentLength,skip,top,includeCommits,includeWorkItemRefs){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={maxCommentLength:maxCommentLength,'$skip':skip,'$top':top,includeCommits:includeCommits,includeWorkItemRefs:includeWorkItemRefs};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues})];});});};
/**
         * Retrieve all pull requests matching a specified criteria.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param searchCriteria - Pull requests will be returned that match this search criteria.
         * @param project - Project ID or project name
         * @param maxCommentLength - Not used.
         * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         * @param top - The number of pull requests to retrieve.
         */
GitRestClient.prototype.getPullRequests=function(repositoryId,searchCriteria,project,maxCommentLength,skip,top){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={searchCriteria:searchCriteria,maxCommentLength:maxCommentLength,'$skip':skip,'$top':top};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Update a pull request
         *
         * @param gitPullRequestToUpdate - The pull request content that should be updated.
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request to update.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequest=function(gitPullRequestToUpdate,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:gitPullRequestToUpdate})];});});};
/**
         * Sends an e-mail notification about a specific pull request to a set of recipients
         *
         * @param userMessage -
         * @param repositoryId - ID of the git repository.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.sharePullRequest=function(userMessage,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/share",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:userMessage})];});});};
/**
         * Create a pull request status.
         *
         * @param status - Pull request status to create.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createPullRequestStatus=function(status,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:status})];});});};
/**
         * Delete pull request status.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param statusId - ID of the pull request status.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deletePullRequestStatus=function(repositoryId,pullRequestId,statusId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,statusId:statusId}})];});});};
/**
         * Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param statusId - ID of the pull request status.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestStatus=function(repositoryId,pullRequestId,statusId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,statusId:statusId}})];});});};
/**
         * Get all the statuses associated with a pull request.
         *
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestStatuses=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Update pull request statuses collection. The only supported operation type is \`remove\`.
         *
         * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
         * @param repositoryId - The repository ID of the pull request’s target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updatePullRequestStatuses=function(patchDocument,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},customHeaders:{"Content-Type":"application/json-patch+json"},body:patchDocument})];});});};
/**
         * Create a comment on a specific thread in a pull request (up to 500 comments can be created per thread).
         *
         * @param comment - The comment to create. Comments can be up to 150,000 characters.
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread that the desired comment is in.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createComment=function(comment,repositoryId,pullRequestId,threadId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId},body:comment})];});});};
/**
         * Delete a comment associated with a specific thread in a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread that the desired comment is in.
         * @param commentId - ID of the comment.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deleteComment=function(repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId}})];});});};
/**
         * Retrieve a comment associated with a specific thread in a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread that the desired comment is in.
         * @param commentId - ID of the comment.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getComment=function(repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId}})];});});};
/**
         * Retrieve all comments associated with a specific thread in a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getComments=function(repositoryId,pullRequestId,threadId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId}})];});});};
/**
         * Update a comment associated with a specific thread in a pull request.
         *
         * @param comment - The comment content that should be updated. Comments can be up to 150,000 characters.
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread that the desired comment is in.
         * @param commentId - ID of the comment to update.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updateComment=function(comment,repositoryId,pullRequestId,threadId,commentId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId,commentId:commentId},body:comment})];});});};
/**
         * Create a thread in a pull request.
         *
         * @param commentThread - The thread to create. Thread must contain at least one comment.
         * @param repositoryId - Repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createThread=function(commentThread,repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},body:commentThread})];});});};
/**
         * Retrieve a thread in a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread.
         * @param project - Project ID or project name
         * @param iteration - If specified, thread position will be tracked using this iteration as the right side of the diff.
         * @param baseIteration - If specified, thread position will be tracked using this iteration as the left side of the diff.
         */
GitRestClient.prototype.getPullRequestThread=function(repositoryId,pullRequestId,threadId,project,iteration,baseIteration){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$iteration':iteration,'$baseIteration':baseIteration};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId},queryParams:queryValues})];});});};
/**
         * Retrieve all threads in a pull request.
         *
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         * @param iteration - If specified, thread positions will be tracked using this iteration as the right side of the diff.
         * @param baseIteration - If specified, thread positions will be tracked using this iteration as the left side of the diff.
         */
GitRestClient.prototype.getThreads=function(repositoryId,pullRequestId,project,iteration,baseIteration){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$iteration':iteration,'$baseIteration':baseIteration};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId},queryParams:queryValues})];});});};
/**
         * Update a thread in a pull request.
         *
         * @param commentThread - The thread content that should be updated.
         * @param repositoryId - The repository ID of the pull request's target branch.
         * @param pullRequestId - ID of the pull request.
         * @param threadId - ID of the thread to update.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updateThread=function(commentThread,repositoryId,pullRequestId,threadId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId,threadId:threadId},body:commentThread})];});});};
/**
         * Retrieve a list of work items associated with a pull request.
         *
         * @param repositoryId - ID or name of the repository.
         * @param pullRequestId - ID of the pull request.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getPullRequestWorkItemRefs=function(repositoryId,pullRequestId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/workitems",routeValues:{project:project,repositoryId:repositoryId,pullRequestId:pullRequestId}})];});});};
/**
         * Push changes to the repository.
         *
         * @param push -
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createPush=function(push,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.2",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",routeValues:{project:project,repositoryId:repositoryId},body:push})];});});};
/**
         * Retrieves a particular push.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param pushId - ID of the push.
         * @param project - Project ID or project name
         * @param includeCommits - The number of commits to include in the result.
         * @param includeRefUpdates - If true, include the list of refs that were updated by the push.
         */
GitRestClient.prototype.getPush=function(repositoryId,pushId,project,includeCommits,includeRefUpdates){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeCommits:includeCommits,includeRefUpdates:includeRefUpdates};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.2",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",routeValues:{project:project,repositoryId:repositoryId,pushId:pushId},queryParams:queryValues})];});});};
/**
         * Retrieves pushes associated with the specified repository.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param skip - Number of pushes to skip.
         * @param top - Number of pushes to return.
         * @param searchCriteria - Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
GitRestClient.prototype.getPushes=function(repositoryId,project,skip,top,searchCriteria){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={'$skip':skip,'$top':top,searchCriteria:searchCriteria};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.2",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Destroy (hard delete) a soft-deleted Git repository.
         *
         * @param project - Project ID or project name
         * @param repositoryId - The ID of the repository.
         */
GitRestClient.prototype.deleteRepositoryFromRecycleBin=function(project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/recycleBin/repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId}})];});});};
/**
         * Retrieve soft-deleted git repositories from the recycle bin.
         *
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getRecycleBinRepositories=function(project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/recycleBin/repositories/{repositoryId}",routeValues:{project:project}})];});});};
/**
         * Recover a soft-deleted Git repository. Recently deleted repositories go into a soft-delete state for a period of time before they are hard deleted and become unrecoverable.
         *
         * @param repositoryDetails -
         * @param project - Project ID or project name
         * @param repositoryId - The ID of the repository.
         */
GitRestClient.prototype.restoreRepositoryFromRecycleBin=function(repositoryDetails,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/recycleBin/repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId},body:repositoryDetails})];});});};
/**
         * Queries the provided repository for its refs and returns them.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param filter - [optional] A filter to apply to the refs (starts with).
         * @param includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
         * @param includeStatuses - [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
         * @param includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
         * @param latestStatusesOnly - [optional] True to include only the tip commit status for each ref. This option requires \`includeStatuses\` to be true. The default value is false.
         * @param peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
         * @param filterContains - [optional] A filter to apply to the refs (contains).
         */
GitRestClient.prototype.getRefs=function(repositoryId,project,filter,includeLinks,includeStatuses,includeMyBranches,latestStatusesOnly,peelTags,filterContains){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={filter:filter,includeLinks:includeLinks,includeStatuses:includeStatuses,includeMyBranches:includeMyBranches,latestStatusesOnly:latestStatusesOnly,peelTags:peelTags,filterContains:filterContains};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Lock or Unlock a branch.
         *
         * @param newRefInfo - The ref update action (lock/unlock) to perform
         * @param repositoryId - The name or ID of the repository.
         * @param filter - The name of the branch to lock/unlock
         * @param project - Project ID or project name
         * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
         */
GitRestClient.prototype.updateRef=function(newRefInfo,repositoryId,filter,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={filter:filter,projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues,body:newRefInfo})];});});};
/**
         * Creating, updating, or deleting refs(branches).
         *
         * @param refUpdates - List of ref updates to attempt to perform
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
         */
GitRestClient.prototype.updateRefs=function(refUpdates,repositoryId,project,projectId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues,body:refUpdates})];});});};
/**
         * Creates a ref favorite
         *
         * @param favorite - The ref favorite to create.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createFavorite=function(favorite,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/favorites/refs/{favoriteId}",routeValues:{project:project},body:favorite})];});});};
/**
         * Deletes the refs favorite specified
         *
         * @param project - Project ID or project name
         * @param favoriteId - The Id of the ref favorite to delete.
         */
GitRestClient.prototype.deleteRefFavorite=function(project,favoriteId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/favorites/refs/{favoriteId}",routeValues:{project:project,favoriteId:favoriteId}})];});});};
/**
         * Gets the refs favorite for a favorite Id.
         *
         * @param project - Project ID or project name
         * @param favoriteId - The Id of the requested ref favorite.
         */
GitRestClient.prototype.getRefFavorite=function(project,favoriteId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/favorites/refs/{favoriteId}",routeValues:{project:project,favoriteId:favoriteId}})];});});};
/**
         * Gets the refs favorites for a repo and an identity.
         *
         * @param project - Project ID or project name
         * @param repositoryId - The id of the repository.
         * @param identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
         */
GitRestClient.prototype.getRefFavorites=function(project,repositoryId,identityId){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={repositoryId:repositoryId,identityId:identityId};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/favorites/refs/{favoriteId}",routeValues:{project:project},queryParams:queryValues})];});});};
/**
         * Create a git repository in a team project.
         *
         * @param gitRepositoryToCreate - Specify the repo name, team project and/or parent repository. Team project information can be ommitted from gitRepositoryToCreate if the request is project-scoped (i.e., includes project Id).
         * @param project - Project ID or project name
         * @param sourceRef - [optional] Specify the source refs to use while creating a fork repo
         */
GitRestClient.prototype.createRepository=function(gitRepositoryToCreate,project,sourceRef){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={sourceRef:sourceRef};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project},queryParams:queryValues,body:gitRepositoryToCreate})];});});};
/**
         * Delete a git repository
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.deleteRepository=function(repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"DELETE",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId}})];});});};
/**
         * Retrieve git repositories.
         *
         * @param project - Project ID or project name
         * @param includeLinks - [optional] True to include reference links. The default value is false.
         * @param includeAllUrls - [optional] True to include all remote URLs. The default value is false.
         * @param includeHidden - [optional] True to include hidden repositories. The default value is false.
         */
GitRestClient.prototype.getRepositories=function(project,includeLinks,includeAllUrls,includeHidden){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeLinks:includeLinks,includeAllUrls:includeAllUrls,includeHidden:includeHidden};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project},queryParams:queryValues})];});});};
/**
         * Retrieve a git repository.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getRepository=function(repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId}})];});});};
/**
         * Retrieve a git repository.
         *
         * @param repositoryId - The name or ID of the repository.
         * @param includeParent - True to include parent repository. Only available in authenticated calls.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getRepositoryWithParent=function(repositoryId,includeParent,project){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={includeParent:includeParent};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Updates the Git repository with either a new repo name or a new default branch.
         *
         * @param newRepositoryInfo - Specify a new repo name or a new default branch of the repository
         * @param repositoryId - The name or ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.updateRepository=function(newRepositoryInfo,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"PATCH",routeTemplate:"{project}/_apis/git/Repositories/{repositoryId}",routeValues:{project:project,repositoryId:repositoryId},body:newRepositoryInfo})];});});};
/**
         * Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
         *
         * @param revertToCreate -
         * @param project - Project ID or project name
         * @param repositoryId - ID of the repository.
         */
GitRestClient.prototype.createRevert=function(revertToCreate,project,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",routeValues:{project:project,repositoryId:repositoryId},body:revertToCreate})];});});};
/**
         * Retrieve information about a revert operation by revert Id.
         *
         * @param project - Project ID or project name
         * @param revertId - ID of the revert operation.
         * @param repositoryId - ID of the repository.
         */
GitRestClient.prototype.getRevert=function(project,revertId,repositoryId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",routeValues:{project:project,revertId:revertId,repositoryId:repositoryId}})];});});};
/**
         * Retrieve information about a revert operation for a specific branch.
         *
         * @param project - Project ID or project name
         * @param repositoryId - ID of the repository.
         * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
         */
GitRestClient.prototype.getRevertForRefName=function(project,repositoryId,refName){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={refName:refName};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",routeValues:{project:project,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Create Git commit status.
         *
         * @param gitCommitStatusToCreate - Git commit status object to create.
         * @param commitId - ID of the Git commit.
         * @param repositoryId - ID of the repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.createCommitStatus=function(gitCommitStatusToCreate,commitId,repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",method:"POST",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Statuses",routeValues:{project:project,commitId:commitId,repositoryId:repositoryId},body:gitCommitStatusToCreate})];});});};
/**
         * Get statuses associated with the Git commit.
         *
         * @param commitId - ID of the Git commit.
         * @param repositoryId - ID of the repository.
         * @param project - Project ID or project name
         * @param top - Optional. The number of statuses to retrieve. Default is 1000.
         * @param skip - Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         * @param latestOnly - The flag indicates whether to get only latest statuses grouped by \`Context.Name\` and \`Context.Genre\`.
         */
GitRestClient.prototype.getStatuses=function(commitId,repositoryId,project,top,skip,latestOnly){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={top:top,skip:skip,latestOnly:latestOnly};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Statuses",routeValues:{project:project,commitId:commitId,repositoryId:repositoryId},queryParams:queryValues})];});});};
/**
         * Retrieve a pull request suggestion for a particular repository or team project.
         *
         * @param repositoryId - ID of the git repository.
         * @param project - Project ID or project name
         */
GitRestClient.prototype.getSuggestions=function(repositoryId,project){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/suggestions",routeValues:{project:project,repositoryId:repositoryId}})];});});};
/**
         * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
         *
         * @param repositoryId - Repository Id.
         * @param sha1 - SHA1 hash of the tree object.
         * @param project - Project ID or project name
         * @param projectId - Project Id.
         * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
         * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
         */
GitRestClient.prototype.getTree=function(repositoryId,sha1,project,projectId,recursive,fileName){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId,recursive:recursive,fileName:fileName};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Trees/{sha1}",routeValues:{project:project,repositoryId:repositoryId,sha1:sha1},queryParams:queryValues})];});});};
/**
         * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
         *
         * @param repositoryId - Repository Id.
         * @param sha1 - SHA1 hash of the tree object.
         * @param project - Project ID or project name
         * @param projectId - Project Id.
         * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
         * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
         */
GitRestClient.prototype.getTreeZip=function(repositoryId,sha1,project,projectId,recursive,fileName){return __awaiter(this,void 0,void 0,function(){var queryValues;return __generator(this,function(_a){queryValues={projectId:projectId,recursive:recursive,fileName:fileName};return[2 /*return*/,this.beginRequest({apiVersion:"5.2-preview.1",httpResponseType:"application/zip",routeTemplate:"{project}/_apis/git/repositories/{repositoryId}/Trees/{sha1}",routeValues:{project:project,repositoryId:repositoryId,sha1:sha1},queryParams:queryValues})];});});};GitRestClient.RESOURCE_AREA_ID="4e080c62-fa21-4fbc-8fef-2a10a2b38049";return GitRestClient;}(RestClientBase_1.RestClientBase));exports.GitRestClient=GitRestClient;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/4584:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(6101)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,index_1){"use strict";function __export(m){for(var p in m)if(!exports.hasOwnProperty(p))__WRAPPED_set(exports,p,'=',__WRAPPED_get(m,p));}Object.defineProperty(exports,"__esModule",{value:true});__export(index_1);}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/4663:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var __assign=this&&this.__assign||Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=__WRAPPED_get(arguments,i);for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))__WRAPPED_set(t,p,'=',__WRAPPED_get(s,p));}return t;};var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(4285)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,XDM_1){"use strict";Object.defineProperty(exports,"__esModule",{value:true});
/**
     * Web SDK version number. Can be specified in an extension's set of demands like: vss-sdk-version/3.0
     */
exports.sdkVersion=3.0;var global=window;if(global._AzureDevOpsSDKVersion){console.error("The AzureDevOps SDK is already loaded. Only one version of this module can be loaded in a given document.");}global._AzureDevOpsSDKVersion=exports.sdkVersion;
/**
     * DevOps host level
     */
var HostType;(function(HostType){
/**
         * The Deployment host
         */
__WRAPPED_set(HostType,HostType["Deployment"]=1,'=',"Deployment");
/**
         * The Enterprise host
         */
__WRAPPED_set(HostType,HostType["Enterprise"]=2,'=',"Enterprise");
/**
         * The organization host
         */
__WRAPPED_set(HostType,HostType["Organization"]=4,'=',"Organization");}(HostType=exports.HostType||(exports.HostType={})));var hostControlId="DevOps.HostControl";var serviceManagerId="DevOps.ServiceManager";var parentChannel=XDM_1.channelManager.addChannel(window.parent);var extensionContext;var initialConfiguration;var initialContributionId;var userContext;var hostContext;var themeElement;var resolveReady;var readyPromise=new Promise(function(resolve){resolveReady=resolve;});
/**
     * Register a method so that the host frame can invoke events
     */
function dispatchEvent(eventName,params){var global=window;var evt;if(typeof global.CustomEvent==="function"){evt=new global.CustomEvent(eventName,params);}else{params=params||{bubbles:false,cancelable:false};evt=document.createEvent('CustomEvent');evt.initCustomEvent(eventName,params.bubbles,params.cancelable,params.detail);}window.dispatchEvent(evt);}parentChannel.getObjectRegistry().register("DevOps.SdkClient",{dispatchEvent:dispatchEvent});
/**
     * Initiates the handshake with the host window.
     *
     * @param options - Initialization options for the extension.
     */
function init(options){return new Promise(function(resolve){var initOptions=__assign({},options,{sdkVersion:exports.sdkVersion});parentChannel.invokeRemoteMethod("initialHandshake",hostControlId,[initOptions]).then(function(handshakeData){initialConfiguration=handshakeData.initialConfig||{};initialContributionId=handshakeData.contributionId;var context=handshakeData.context;extensionContext=context.extension;userContext=context.user;hostContext=context.host;if(handshakeData.themeData){applyTheme(handshakeData.themeData);window.addEventListener("themeChanged",function(ev){applyTheme(ev.detail.data);});}resolveReady();resolve();});});}exports.init=init;
/**
    * Register a callback that gets called once the initial setup/handshake has completed.
    * If the initial setup is already completed, the callback is invoked at the end of the current call stack.
    */
function ready(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,readyPromise];});});}exports.ready=ready;
/**
    * Notifies the host that the extension successfully loaded (stop showing the loading indicator)
    */
function notifyLoadSucceeded(){return parentChannel.invokeRemoteMethod("notifyLoadSucceeded",hostControlId);}exports.notifyLoadSucceeded=notifyLoadSucceeded;
/**
    * Notifies the host that the extension failed to load
    */
function notifyLoadFailed(e){return parentChannel.invokeRemoteMethod("notifyLoadFailed",hostControlId,[e]);}exports.notifyLoadFailed=notifyLoadFailed;function getWaitForReadyError(method){return"Attempted to call "+method+"() before init() was complete. Wait for init to complete or place within a ready() callback.";}
/**
    * Get the configuration data passed in the initial handshake from the parent frame
    */
function getConfiguration(){if(!initialConfiguration){throw new Error(getWaitForReadyError("getConfiguration"));}return initialConfiguration;}exports.getConfiguration=getConfiguration;
/**
    * Gets the information about the contribution that first caused this extension to load.
    */
function getContributionId(){if(!initialContributionId){throw new Error(getWaitForReadyError("getContributionId"));}return initialContributionId;}exports.getContributionId=getContributionId;
/**
    * Gets information about the current user
    */
function getUser(){if(!userContext){throw new Error(getWaitForReadyError("getUser"));}return userContext;}exports.getUser=getUser;
/**
    * Gets information about the host (i.e. an Azure DevOps organization) that the page is targeting
    */
function getHost(){if(!hostContext){throw new Error(getWaitForReadyError("getHost"));}return hostContext;}exports.getHost=getHost;
/**
    * Get the context about the extension that owns the content that is being hosted
    */
function getExtensionContext(){if(!extensionContext){throw new Error(getWaitForReadyError("getExtensionContext"));}return extensionContext;}exports.getExtensionContext=getExtensionContext;
/**
    * Get the contribution with the given contribution id. The returned contribution has a method to get a registered object within that contribution.
    *
    * @param contributionId - Id of the contribution to get
    */
function getService(contributionId){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,ready().then(function(){return parentChannel.invokeRemoteMethod("getService",serviceManagerId,[contributionId]);})];});});}exports.getService=getService;
/**
    * Register an object (instance or factory method) that this extension exposes to the host frame.
    *
    * @param instanceId - unique id of the registered object
    * @param instance - Either: (1) an object instance, or (2) a function that takes optional context data and returns an object instance.
    */
function register(instanceId,instance){parentChannel.getObjectRegistry().register(instanceId,instance);}exports.register=register;
/**
    * Removes an object that this extension exposed to the host frame.
    *
    * @param instanceId - unique id of the registered object
    */
function unregister(instanceId){parentChannel.getObjectRegistry().unregister(instanceId);}exports.unregister=unregister;
/**
    * Fetch an access token which will allow calls to be made to other DevOps services
    */
function getAccessToken(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,parentChannel.invokeRemoteMethod("getAccessToken",hostControlId).then(function(tokenObj){return tokenObj.token;})];});});}exports.getAccessToken=getAccessToken;
/**
    * Fetch an token which can be used to identify the current user
    */
function getAppToken(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){return[2 /*return*/,parentChannel.invokeRemoteMethod("getAppToken",hostControlId).then(function(tokenObj){return tokenObj.token;})];});});}exports.getAppToken=getAppToken;
/**
    * Requests the parent window to resize the container for this extension based on the current extension size.
    *
    * @param width - Optional width, defaults to scrollWidth
    * @param height - Optional height, defaults to scrollHeight
    */
function resize(width,height){var body=document.body;if(body){var newWidth=typeof width==="number"?width:body?body.scrollWidth:undefined;var newHeight=typeof height==="number"?height:body?body.scrollHeight:undefined;parentChannel.invokeRemoteMethod("resize",hostControlId,[newWidth,newHeight]);}}exports.resize=resize;
/**
     * Applies theme variables to the current document
     */
function applyTheme(themeData){if(!themeElement){themeElement=document.createElement("style");themeElement.type="text/css";document.head.appendChild(themeElement);}var cssVariables=[];if(themeData){for(var varName in themeData){cssVariables.push("--"+varName+": "+__WRAPPED_get(themeData,varName));}}themeElement.innerText=":root { "+cssVariables.join("; ")+" } body { color: var(--text-primary-color) }";dispatchEvent("themeApplied",{detail:themeData});}exports.applyTheme=applyTheme;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/4285:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(7310),__webpack_require__(7097)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var smallestRandom=parseInt("10000000000",36);var maxSafeInteger=Number.MAX_SAFE_INTEGER||9007199254740991;
/**
     * Create a new random 22-character fingerprint.
     * @return string fingerprint
     */
function newFingerprint(){
// smallestRandom ensures we will get a 11-character result from the base-36 conversion.

return Math.floor(Math.random()*(maxSafeInteger-smallestRandom)+smallestRandom).toString(36)+Math.floor(Math.random()*(maxSafeInteger-smallestRandom)+smallestRandom).toString(36);}
/**
     * Gets all own and inherited property names of the given object, excluding
     * those that are inherited from Object's prototype and "constructor".
     * @param obj
     */
function getAllPropertyNames(obj){var properties={};while(obj&&obj!==Object.prototype){var ownPropertyNames=Object.getOwnPropertyNames(obj);for(var _i=0,ownPropertyNames_1=ownPropertyNames;_i<ownPropertyNames_1.length;_i++){var name_1=__WRAPPED_get(ownPropertyNames_1,_i);if(name_1!=="constructor"){__WRAPPED_set(properties,name_1,'=',true);}}obj=Object.getPrototypeOf(obj);}return properties;}
/**
     * Catalog of objects exposed for XDM
     */
var XDMObjectRegistry=(function(){function XDMObjectRegistry(){this.objects={};}
/**
        * Register an object (instance or factory method) exposed by this frame to callers in a remote frame
        *
        * @param instanceId - unique id of the registered object
        * @param instance - Either: (1) an object instance, or (2) a function that takes optional context data and returns an object instance.
        */
XDMObjectRegistry.prototype.register=function(instanceId,instance){__WRAPPED_set(this.objects,instanceId,'=',instance);};
/**
        * Unregister an object (instance or factory method) that was previously registered by this frame
        *
        * @param instanceId - unique id of the registered object
        */
XDMObjectRegistry.prototype.unregister=function(instanceId){delete this.objects[instanceId];};
/**
        * Get an instance of an object registered with the given id
        *
        * @param instanceId - unique id of the registered object
        * @param contextData - Optional context data to pass to a registered object's factory method
        */
XDMObjectRegistry.prototype.getInstance=function(instanceId,contextData){var instance=__WRAPPED_get(this.objects,instanceId);if(!instance){return undefined;}if(typeof instance==="function"){return instance(contextData);}else{return instance;}};return XDMObjectRegistry;}());exports.XDMObjectRegistry=XDMObjectRegistry;var MAX_XDM_DEPTH=100;var nextChannelId=1;
/**
     * Represents a channel of communication between frames\document
     * Stays "alive" across multiple funtion\method calls
     */
var XDMChannel=(function(){function XDMChannel(postToWindow,targetOrigin){this.promises={};this.nextMessageId=1;this.nextProxyId=1;this.proxyFunctions={};this.postToWindow=postToWindow;this.targetOrigin=targetOrigin;this.registry=new XDMObjectRegistry();this.channelId=nextChannelId++;if(!this.targetOrigin){this.handshakeToken=newFingerprint();}}
/**
        * Get the object registry to handle messages from this specific channel.
        * Upon receiving a message, this channel registry will be used first, then
        * the global registry will be used if no handler is found here.
        */
XDMChannel.prototype.getObjectRegistry=function(){return this.registry;};
/**
        * Invoke a method via RPC. Lookup the registered object on the remote end of the channel and invoke the specified method.
        *
        * @param method - Name of the method to invoke
        * @param instanceId - unique id of the registered object
        * @param params - Arguments to the method to invoke
        * @param instanceContextData - Optional context data to pass to a registered object's factory method
        * @param serializationSettings - Optional serialization settings
        */
XDMChannel.prototype.invokeRemoteMethod=function(methodName,instanceId,params,instanceContextData,serializationSettings){return __awaiter(this,void 0,void 0,function(){var message,promise;var _this=this;return __generator(this,function(_a){message={id:this.nextMessageId++,methodName:methodName,instanceId:instanceId,instanceContext:instanceContextData,params:this._customSerializeObject(params,serializationSettings),serializationSettings:serializationSettings};if(!this.targetOrigin){message.handshakeToken=this.handshakeToken;}promise=new Promise(function(resolve,reject){__WRAPPED_set(_this.promises,message.id,'=',{resolve:resolve,reject:reject});});this._sendRpcMessage(message);return[2 /*return*/,promise];});});};
/**
        * Get a proxied object that represents the object registered with the given instance id on the remote side of this channel.
        *
        * @param instanceId - unique id of the registered object
        * @param contextData - Optional context data to pass to a registered object's factory method
        */
XDMChannel.prototype.getRemoteObjectProxy=function(instanceId,contextData){return this.invokeRemoteMethod("",instanceId,undefined,contextData);};XDMChannel.prototype.invokeMethod=function(registeredInstance,rpcMessage){var _this=this;if(!rpcMessage.methodName){
// Null/empty method name indicates to return the registered object itself.

this._success(rpcMessage,registeredInstance,rpcMessage.handshakeToken);return;}var method=__WRAPPED_get(registeredInstance,rpcMessage.methodName);if(typeof method!=="function"){this.error(rpcMessage,new Error("RPC method not found: "+rpcMessage.methodName));return;}try{
// Call specified method.  Add nested success and error call backs with closure

// so we can post back a response as a result or error as appropriate

var methodArgs=[];if(rpcMessage.params){methodArgs=this._customDeserializeObject(rpcMessage.params,{});}var result=method.apply(registeredInstance,methodArgs);if(result&&result.then&&typeof result.then==="function"){result.then(function(asyncResult){_this._success(rpcMessage,asyncResult,rpcMessage.handshakeToken);},function(e){_this.error(rpcMessage,e);});}else{this._success(rpcMessage,result,rpcMessage.handshakeToken);}}catch(exception){
// send back as error if an exception is thrown

this.error(rpcMessage,exception);}};XDMChannel.prototype.getRegisteredObject=function(instanceId,instanceContext){if(instanceId==="__proxyFunctions"){
// Special case for proxied functions of remote instances

return this.proxyFunctions;}
// Look in the channel registry first

var registeredObject=this.registry.getInstance(instanceId,instanceContext);if(!registeredObject){
// Look in the global registry as a fallback

registeredObject=exports.globalObjectRegistry.getInstance(instanceId,instanceContext);}return registeredObject;};
/**
        * Handle a received message on this channel. Dispatch to the appropriate object found via object registry
        *
        * @param rpcMessage - Message data
        * @return True if the message was handled by this channel. Otherwise false.
        */
XDMChannel.prototype.onMessage=function(rpcMessage){var _this=this;if(rpcMessage.instanceId){
// Find the object that handles this requestNeed to find implementation

// Look in the channel registry first

var registeredObject=this.getRegisteredObject(rpcMessage.instanceId,rpcMessage.instanceContext);if(!registeredObject){
// If not found return false to indicate that the message was not handled

return false;}if(typeof registeredObject["then"]==="function"){registeredObject.then(function(resolvedInstance){_this.invokeMethod(resolvedInstance,rpcMessage);},function(e){_this.error(rpcMessage,e);});}else{this.invokeMethod(registeredObject,rpcMessage);}}else{var promise=__WRAPPED_get(this.promises,rpcMessage.id);if(!promise){
// Message not handled by this channel.

return false;}if(rpcMessage.error){promise.reject(this._customDeserializeObject([rpcMessage.error],{})[0]);}else{promise.resolve(this._customDeserializeObject([rpcMessage.result],{})[0]);}delete this.promises[rpcMessage.id];}
// Message handled by this channel

return true;};XDMChannel.prototype.owns=function(source,origin,rpcMessage){
/// Determines whether the current message belongs to this channel or not

if(this.postToWindow===source){
// For messages coming from sandboxed iframes the origin will be set to the string "null".  This is 

// how onprem works.  If it is not a sandboxed iFrame we will get the origin as expected.

if(this.targetOrigin){if(origin){return origin.toLowerCase()==="null"||this.targetOrigin.toLowerCase().indexOf(origin.toLowerCase())===0;}else{return false;}}else{if(rpcMessage.handshakeToken&&rpcMessage.handshakeToken===this.handshakeToken){this.targetOrigin=origin;return true;}}}return false;};XDMChannel.prototype.error=function(messageObj,errorObj){this._sendRpcMessage({id:messageObj.id,error:this._customSerializeObject([errorObj],messageObj.serializationSettings)[0],handshakeToken:messageObj.handshakeToken});};XDMChannel.prototype._success=function(messageObj,result,handshakeToken){this._sendRpcMessage({id:messageObj.id,result:this._customSerializeObject([result],messageObj.serializationSettings)[0],handshakeToken:handshakeToken});};XDMChannel.prototype._sendRpcMessage=function(message){__WRAPPED_call(this.postToWindow,'postMessage')(JSON.stringify(message),"*");};XDMChannel.prototype._customSerializeObject=function(obj,settings,prevParentObjects,nextCircularRefId,depth){var _this=this;if(nextCircularRefId===void 0){nextCircularRefId=1;}if(depth===void 0){depth=1;}if(!obj||depth>MAX_XDM_DEPTH){return undefined;}if(obj instanceof Node||obj instanceof Window||obj instanceof Event){return undefined;}var returnValue;var parentObjects;if(!prevParentObjects){parentObjects={newObjects:[],originalObjects:[]};}else{parentObjects=prevParentObjects;}parentObjects.originalObjects.push(obj);var serializeMember=function(parentObject,newObject,key){var item;try{item=__WRAPPED_get(parentObject,key);}catch(ex){
                    // Cannot access this property. Skip its serialization.
                }var itemType=typeof item;if(itemType==="undefined"){return;}
// Check for a circular reference by looking at parent objects

var parentItemIndex=-1;if(itemType==="object"){parentItemIndex=parentObjects.originalObjects.indexOf(item);}if(parentItemIndex>=0){
// Circular reference found. Add reference to parent

var parentItem=__WRAPPED_get(parentObjects.newObjects,parentItemIndex);if(!parentItem.__circularReferenceId){parentItem.__circularReferenceId=nextCircularRefId++;}__WRAPPED_set(newObject,key,'=',{__circularReference:parentItem.__circularReferenceId});}else{if(itemType==="function"){var proxyFunctionId=_this.nextProxyId++;__WRAPPED_set(newObject,key,'=',{__proxyFunctionId:_this._registerProxyFunction(item,obj),_channelId:_this.channelId});}else if(itemType==="object"){if(item&&item instanceof Date){__WRAPPED_set(newObject,key,'=',{__proxyDate:item.getTime()});}else{__WRAPPED_set(newObject,key,'=',_this._customSerializeObject(item,settings,parentObjects,nextCircularRefId,depth+1));}}else if(key!=="__proxyFunctionId"){
// Just add non object/function properties as-is. Don't include "__proxyFunctionId" to protect

// our proxy methods from being invoked from other messages.

__WRAPPED_set(newObject,key,'=',item);}}};if(obj instanceof Array){returnValue=[];parentObjects.newObjects.push(returnValue);for(var i=0,l=obj.length;i<l;i++){serializeMember(obj,returnValue,i);}}else{returnValue={};parentObjects.newObjects.push(returnValue);var keys={};try{keys=getAllPropertyNames(obj);}catch(ex){
                    // We may not be able to access the iterator of this object. Skip its serialization.
                }for(var key in keys){
// Don't serialize properties that start with an underscore.

if(key&&key[0]!=="_"||settings&&settings.includeUnderscoreProperties){serializeMember(obj,returnValue,key);}}}parentObjects.originalObjects.pop();parentObjects.newObjects.pop();return returnValue;};XDMChannel.prototype._registerProxyFunction=function(func,context){var proxyFunctionId=this.nextProxyId++;__WRAPPED_set(this.proxyFunctions,"proxy"+proxyFunctionId,'=',function(){return func.apply(context,Array.prototype.slice.call(arguments,0));});return proxyFunctionId;};XDMChannel.prototype._customDeserializeObject=function(obj,circularRefs){var _this=this;var that=this;if(!obj){return null;}var deserializeMember=function(parentObject,key){var item=__WRAPPED_get(parentObject,key);var itemType=typeof item;if(key==="__circularReferenceId"&&itemType==='number'){__WRAPPED_set(circularRefs,item,'=',parentObject);delete parentObject[key];}else if(itemType==="object"&&item){if(item.__proxyFunctionId){__WRAPPED_set(parentObject,key,'=',function(){return that.invokeRemoteMethod("proxy"+item.__proxyFunctionId,"__proxyFunctions",Array.prototype.slice.call(arguments,0),{},{includeUnderscoreProperties:true});});}else if(item.__proxyDate){__WRAPPED_set(parentObject,key,'=',new Date(item.__proxyDate));}else if(item.__circularReference){__WRAPPED_set(parentObject,key,'=',__WRAPPED_get(circularRefs,item.__circularReference));}else{_this._customDeserializeObject(item,circularRefs);}}};if(obj instanceof Array){for(var i=0,l=obj.length;i<l;i++){deserializeMember(obj,i);}}else if(typeof obj==="object"){for(var key in obj){deserializeMember(obj,key);}}return obj;};return XDMChannel;}());exports.XDMChannel=XDMChannel;
/**
    * Registry of XDM channels kept per target frame/window
    */
var XDMChannelManager=(function(){function XDMChannelManager(){var _this=this;this._channels=[];this._handleMessageReceived=function(event){
// get channel and dispatch to it

var rpcMessage;if(typeof event.data==="string"){try{rpcMessage=JSON.parse(event.data);}catch(error){
                        // The message is not a valid JSON string. Not one of our events.
                    }}if(rpcMessage){var handled=false;var channelOwner=void 0;for(var _i=0,_a=_this._channels;_i<_a.length;_i++){var channel=__WRAPPED_get(_a,_i);if(channel.owns(event.source,event.origin,rpcMessage)){
// keep a reference to the channel owner found. 

channelOwner=channel;handled=channel.onMessage(rpcMessage)||handled;}}if(channelOwner&&!handled){if(window.console){console.error("No handler found on any channel for message: "+JSON.stringify(rpcMessage));}
// for instance based proxies, send an error on the channel owning the message to resolve any control creation promises

// on the host frame. 

if(rpcMessage.instanceId){channelOwner.error(rpcMessage,new Error("The registered object "+rpcMessage.instanceId+" could not be found."));}}}};window.addEventListener("message",this._handleMessageReceived);}
/**
        * Add an XDM channel for the given target window/iframe
        *
        * @param window - Target iframe window to communicate with
        * @param targetOrigin - Url of the target iframe (if known)
        */
XDMChannelManager.prototype.addChannel=function(window,targetOrigin){var channel=new XDMChannel(window,targetOrigin);this._channels.push(channel);return channel;};XDMChannelManager.prototype.removeChannel=function(channel){this._channels=this._channels.filter(function(c){return c!==channel;});};return XDMChannelManager;}());
/**
    * The registry of global XDM handlers
    */
exports.globalObjectRegistry=new XDMObjectRegistry();
/**
    * Manages XDM channels per target window/frame
    */
exports.channelManager=new XDMChannelManager();}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/9560:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, define */

(function($){'use strict';

/*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;}

/*
    * Bitwise rotate a 32-bit number to the left.
    */
function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt;}

/*
    * These functions implement the four basic operations the algorithm uses.
    */
function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}function md5_ff(a,b,c,d,x,s,t){return md5_cmn(b&c|~b&d,a,b,x,s,t);}function md5_gg(a,b,c,d,x,s,t){return md5_cmn(b&d|c&~d,a,b,x,s,t);}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|~d),a,b,x,s,t);}

/*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
function binl_md5(x,len){
/* append padding */
x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var i,olda,oldb,oldc,oldd,a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=md5_ff(a,b,c,d,__WRAPPED_get(x,i),7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,__WRAPPED_get(x,i),20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,__WRAPPED_get(x,i),11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,__WRAPPED_get(x,i),6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}return[a,b,c,d];}

/*
    * Convert an array of little-endian words to a string
    */
function binl2rstr(input){var i,output='';for(i=0;i<input.length*32;i+=8){output+=String.fromCharCode(input[i>>5]>>>i%32&0xFF);}return output;}

/*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
function rstr2binl(input){var i,output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){__WRAPPED_set(output,i,'=',0);}for(i=0;i<input.length*8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<i%32;}return output;}

/*
    * Calculate the MD5 of a raw string
    */
function rstr_md5(s){return binl2rstr(binl_md5(rstr2binl(s),s.length*8));}

/*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
function rstr_hmac_md5(key,data){var i,bkey=rstr2binl(key),ipad=[],opad=[],hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=binl_md5(bkey,key.length*8);}for(i=0;i<16;i+=1){__WRAPPED_set(ipad,i,'=',__WRAPPED_get(bkey,i)^0x36363636);__WRAPPED_set(opad,i,'=',__WRAPPED_get(bkey,i)^0x5C5C5C5C);}hash=binl_md5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binl_md5(opad.concat(hash),512+128));}

/*
    * Convert a raw string to a hex string
    */
function rstr2hex(input){var hex_tab='0123456789abcdef',output='',x,i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hex_tab.charAt(x>>>4&0x0F)+hex_tab.charAt(x&0x0F);}return output;}

/*
    * Encode a string as utf-8
    */
function str2rstr_utf8(input){return unescape(encodeURIComponent(input));}

/*
    * Take string arguments and return either raw or hex encoded strings
    */
function raw_md5(s){return rstr_md5(str2rstr_utf8(s));}function hex_md5(s){return rstr2hex(raw_md5(s));}function raw_hmac_md5(k,d){return rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d));}function hex_hmac_md5(k,d){return rstr2hex(raw_hmac_md5(k,d));}function md5(string,key,raw){if(!key){if(!raw){return hex_md5(string);}return raw_md5(string);}if(!raw){return hex_hmac_md5(key,string);}return raw_hmac_md5(key,string);}if(true){!(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return md5;}).call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}}(this));


/***/},

/***/7097:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__(8091).polyfill();


/***/},

/***/8091:module=>{"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target,firstSource){if(target===undefined||target===null){throw new TypeError('Cannot convert first argument to object');}var to=Object(target);for(var i=1;i<arguments.length;i++){var nextSource=__WRAPPED_get(arguments,i);if(nextSource===undefined||nextSource===null){continue;}var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=__WRAPPED_get(keysArray,nextIndex);var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc!==undefined&&desc.enumerable){__WRAPPED_set(to,nextKey,'=',__WRAPPED_get(nextSource,nextKey));}}}return to;}function polyfill(){if(!Object.assign){Object.defineProperty(Object,'assign',{enumerable:false,configurable:true,writable:true,value:assign});}}module.exports={assign:assign,polyfill:polyfill};


/***/},

/***/7310:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill

// To use it:  require('es6-promise/auto');


module.exports=__webpack_require__(2702).polyfill();


/***/},

/***/2702:function(module,__unused_webpack_exports,__webpack_require__){

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function(global,factory){true?module.exports=factory():0;}(this,function(){'use strict';function objectOrFunction(x){var type=typeof x;return x!==null&&(type==='object'||type==='function');}function isFunction(x){return typeof x==='function';}var _isArray=void 0;if(Array.isArray){_isArray=Array.isArray;}else{_isArray=function(x){return Object.prototype.toString.call(x)==='[object Array]';};}var isArray=_isArray;var len=0;var vertxNext=void 0;var customSchedulerFn=void 0;var asap=function asap(callback,arg){__WRAPPED_set(queue,len,'=',callback);queue[len+1]=arg;len+=2;if(len===2){
// If len is 2, that means that we need to schedule an async flush.

// If additional callbacks are queued before the queue is flushed, they

// will be processed by this flush that we are scheduling.

if(customSchedulerFn){customSchedulerFn(flush);}else{scheduleFlush();}}};function setScheduler(scheduleFn){customSchedulerFn=scheduleFn;}function setAsap(asapFn){asap=asapFn;}var browserWindow=typeof window!=='undefined'?window:undefined;var browserGlobal=browserWindow||{};var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;var isNode=typeof self==='undefined'&&typeof process!=='undefined'&&{}.toString.call(process)==='[object process]';

// test for web worker but not in IE10

var isWorker=typeof Uint8ClampedArray!=='undefined'&&typeof importScripts!=='undefined'&&typeof MessageChannel!=='undefined';

// node

function useNextTick(){
// node version 0.10.x displays a deprecation warning when nextTick is used recursively

// see https://github.com/cujojs/when/issues/410 for details

return function(){return process.nextTick(flush);};}

// vertx

function useVertxTimer(){if(typeof vertxNext!=='undefined'){return function(){vertxNext(flush);};}return useSetTimeout();}function useMutationObserver(){var iterations=0;var observer=new BrowserMutationObserver(flush);var node=document.createTextNode('');observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2;};}

// web worker

function useMessageChannel(){var channel=new MessageChannel();channel.port1.onmessage=flush;return function(){return __WRAPPED_call(channel.port2,'postMessage')(0);};}function useSetTimeout(){
// Store setTimeout reference so es6-promise will be unaffected by

// other code modifying setTimeout (like sinon.useFakeTimers())

var globalSetTimeout=setTimeout;return function(){return globalSetTimeout(flush,1);};}var queue=new Array(1000);function flush(){for(var i=0;i<len;i+=2){var callback=__WRAPPED_get(queue,i);var arg=queue[i+1];callback(arg);__WRAPPED_set(queue,i,'=',undefined);queue[i+1]=undefined;}len=0;}function attemptVertx(){try{var vertx=Function('return this')().require('vertx');vertxNext=vertx.runOnLoop||vertx.runOnContext;return useVertxTimer();}catch(e){return useSetTimeout();}}var scheduleFlush=void 0;
// Decide what async method to use to triggering processing of queued callbacks:

if(isNode){scheduleFlush=useNextTick();}else if(BrowserMutationObserver){scheduleFlush=useMutationObserver();}else if(isWorker){scheduleFlush=useMessageChannel();}else if(browserWindow===undefined&&"function"==='function'){scheduleFlush=attemptVertx();}else{scheduleFlush=useSetTimeout();}function then(onFulfillment,onRejection){var parent=this;var child=new this.constructor(noop);if(__WRAPPED_get(child,PROMISE_ID)===undefined){makePromise(child);}var _state=parent._state;if(_state){var callback=arguments[_state-1];asap(function(){return invokeCallback(_state,child,callback,parent._result);});}else{subscribe(parent,child,onFulfillment,onRejection);}return child;}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object){
/*jshint validthis:true */
var Constructor=this;if(object&&typeof object==='object'&&object.constructor===Constructor){return object;}var promise=new Constructor(noop);resolve(promise,object);return promise;}var PROMISE_ID=Math.random().toString(36).substring(2);function noop(){}var PENDING=void 0;var FULFILLED=1;var REJECTED=2;function selfFulfillment(){return new TypeError("You cannot resolve a promise with itself");}function cannotReturnOwn(){return new TypeError('A promises callback cannot return that same promise.');}function tryThen(then$$1,value,fulfillmentHandler,rejectionHandler){try{then$$1.call(value,fulfillmentHandler,rejectionHandler);}catch(e){return e;}}function handleForeignThenable(promise,thenable,then$$1){asap(function(promise){var sealed=false;var error=tryThen(then$$1,thenable,function(value){if(sealed){return;}sealed=true;if(thenable!==value){resolve(promise,value);}else{fulfill(promise,value);}},function(reason){if(sealed){return;}sealed=true;reject(promise,reason);},'Settle: '+(promise._label||' unknown promise'));if(!sealed&&error){sealed=true;reject(promise,error);}},promise);}function handleOwnThenable(promise,thenable){if(thenable._state===FULFILLED){fulfill(promise,thenable._result);}else if(thenable._state===REJECTED){reject(promise,thenable._result);}else{subscribe(thenable,undefined,function(value){return resolve(promise,value);},function(reason){return reject(promise,reason);});}}function handleMaybeThenable(promise,maybeThenable,then$$1){if(maybeThenable.constructor===promise.constructor&&then$$1===then&&maybeThenable.constructor.resolve===resolve$1){handleOwnThenable(promise,maybeThenable);}else{if(then$$1===undefined){fulfill(promise,maybeThenable);}else if(isFunction(then$$1)){handleForeignThenable(promise,maybeThenable,then$$1);}else{fulfill(promise,maybeThenable);}}}function resolve(promise,value){if(promise===value){reject(promise,selfFulfillment());}else if(objectOrFunction(value)){var then$$1=void 0;try{then$$1=value.then;}catch(error){reject(promise,error);return;}handleMaybeThenable(promise,value,then$$1);}else{fulfill(promise,value);}}function publishRejection(promise){if(promise._onerror){promise._onerror(promise._result);}publish(promise);}function fulfill(promise,value){if(promise._state!==PENDING){return;}promise._result=value;promise._state=FULFILLED;if(promise._subscribers.length!==0){asap(publish,promise);}}function reject(promise,reason){if(promise._state!==PENDING){return;}promise._state=REJECTED;promise._result=reason;asap(publishRejection,promise);}function subscribe(parent,child,onFulfillment,onRejection){var _subscribers=parent._subscribers;var length=_subscribers.length;parent._onerror=null;__WRAPPED_set(_subscribers,length,'=',child);__WRAPPED_set(_subscribers,length+FULFILLED,'=',onFulfillment);__WRAPPED_set(_subscribers,length+REJECTED,'=',onRejection);if(length===0&&parent._state){asap(publish,parent);}}function publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return;}var child=void 0,callback=void 0,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=__WRAPPED_get(subscribers,i);callback=__WRAPPED_get(subscribers,i+settled);if(child){invokeCallback(settled,child,callback,detail);}else{callback(detail);}}promise._subscribers.length=0;}function invokeCallback(settled,promise,callback,detail){var hasCallback=isFunction(callback),value=void 0,error=void 0,succeeded=true;if(hasCallback){try{value=callback(detail);}catch(e){succeeded=false;error=e;}if(promise===value){reject(promise,cannotReturnOwn());return;}}else{value=detail;}if(promise._state!==PENDING){
    // noop
  }else if(hasCallback&&succeeded){resolve(promise,value);}else if(succeeded===false){reject(promise,error);}else if(settled===FULFILLED){fulfill(promise,value);}else if(settled===REJECTED){reject(promise,value);}}function initializePromise(promise,resolver){try{resolver(function resolvePromise(value){resolve(promise,value);},function rejectPromise(reason){reject(promise,reason);});}catch(e){reject(promise,e);}}var id=0;function nextId(){return id++;}function makePromise(promise){__WRAPPED_set(promise,PROMISE_ID,'=',id++);promise._state=undefined;promise._result=undefined;promise._subscribers=[];}function validationError(){return new Error('Array Methods must be provided an Array');}var Enumerator=(function(){function Enumerator(Constructor,input){this._instanceConstructor=Constructor;this.promise=new Constructor(noop);if(!__WRAPPED_get(this.promise,PROMISE_ID)){makePromise(this.promise);}if(isArray(input)){this.length=input.length;this._remaining=input.length;this._result=new Array(this.length);if(this.length===0){fulfill(this.promise,this._result);}else{this.length=this.length||0;this._enumerate(input);if(this._remaining===0){fulfill(this.promise,this._result);}}}else{reject(this.promise,validationError());}}Enumerator.prototype._enumerate=function _enumerate(input){for(var i=0;this._state===PENDING&&i<input.length;i++){this._eachEntry(__WRAPPED_get(input,i),i);}};Enumerator.prototype._eachEntry=function _eachEntry(entry,i){var c=this._instanceConstructor;var resolve$$1=c.resolve;if(resolve$$1===resolve$1){var _then=void 0;var error=void 0;var didError=false;try{_then=entry.then;}catch(e){didError=true;error=e;}if(_then===then&&entry._state!==PENDING){this._settledAt(entry._state,i,entry._result);}else if(typeof _then!=='function'){this._remaining--;__WRAPPED_set(this._result,i,'=',entry);}else if(c===Promise$1){var promise=new c(noop);if(didError){reject(promise,error);}else{handleMaybeThenable(promise,entry,_then);}this._willSettleAt(promise,i);}else{this._willSettleAt(new c(function(resolve$$1){return resolve$$1(entry);}),i);}}else{this._willSettleAt(resolve$$1(entry),i);}};Enumerator.prototype._settledAt=function _settledAt(state,i,value){var promise=this.promise;if(promise._state===PENDING){this._remaining--;if(state===REJECTED){reject(promise,value);}else{__WRAPPED_set(this._result,i,'=',value);}}if(this._remaining===0){fulfill(promise,this._result);}};Enumerator.prototype._willSettleAt=function _willSettleAt(promise,i){var enumerator=this;subscribe(promise,undefined,function(value){return enumerator._settledAt(FULFILLED,i,value);},function(reason){return enumerator._settledAt(REJECTED,i,reason);});};return Enumerator;}());

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries){return new Enumerator(this,entries).promise;}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries){
/*jshint validthis:true */
var Constructor=this;if(!isArray(entries)){return new Constructor(function(_,reject){return reject(new TypeError('You must pass an array to race.'));});}else{return new Constructor(function(resolve,reject){var length=entries.length;for(var i=0;i<length;i++){Constructor.resolve(__WRAPPED_get(entries,i)).then(resolve,reject);}});}}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason){
/*jshint validthis:true */
var Constructor=this;var promise=new Constructor(noop);reject(promise,reason);return promise;}function needsResolver(){throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');}function needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1=(function(){function Promise(resolver){__WRAPPED_set(this,PROMISE_ID,'=',nextId());this._result=this._state=undefined;this._subscribers=[];if(noop!==resolver){typeof resolver!=='function'&&needsResolver();this instanceof Promise?initializePromise(this,resolver):needsNew();}}

/**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

/**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


Promise.prototype.catch=function _catch(onRejection){return this.then(null,onRejection);};

/**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


Promise.prototype.finally=function _finally(callback){var promise=this;var constructor=promise.constructor;if(isFunction(callback)){return promise.then(function(value){return constructor.resolve(callback()).then(function(){return value;});},function(reason){return constructor.resolve(callback()).then(function(){throw reason;});});}return promise.then(callback,callback);};return Promise;}());Promise$1.prototype.then=then;Promise$1.all=all;Promise$1.race=race;Promise$1.resolve=resolve$1;Promise$1.reject=reject$1;Promise$1._setScheduler=setScheduler;Promise$1._setAsap=setAsap;Promise$1._asap=asap;

/*global self*/
function polyfill(){var local=void 0;if(typeof __webpack_require__.g!=='undefined'){local=__webpack_require__.g;}else if(typeof self!=='undefined'){local=self;}else{try{local=Function('return this')();}catch(e){throw new Error('polyfill failed because global object is unavailable in this environment');}}var P=local.Promise;if(P){var promiseToString=null;try{promiseToString=Object.prototype.toString.call(P.resolve());}catch(e){
      // silently ignored
    }if(promiseToString==='[object Promise]'&&!P.cast){return;}}local.Promise=Promise$1;}

// Strange compat..

Promise$1.polyfill=polyfill;Promise$1.Promise=Promise$1;return Promise$1;}));






/***/},

/***/5983:(module,__unused_webpack_exports,__webpack_require__)=>{

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Detect free variable `global` from Node.js. */
var freeGlobal=typeof __webpack_require__.g=='object'&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;

/** Used as a reference to the global object. */
var root=freeGlobal||freeSelf||Function('return this')();

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite=root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number,
 *  else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}module.exports=isFinite;


/***/},

/***/138:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=__WRAPPED_get(arguments,i);for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))__WRAPPED_set(t,p,'=',__WRAPPED_get(s,p));}return t;};return __assign.apply(this,arguments);};var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;var desc=Object.getOwnPropertyDescriptor(m,k);if(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable)){desc={enumerable:true,get:function(){return __WRAPPED_get(m,k);}};}Object.defineProperty(o,k2,desc);}:function(o,m,k,k2){if(k2===undefined)k2=k;__WRAPPED_set(o,k2,'=',__WRAPPED_get(m,k));});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(6080),__webpack_require__(4663),__webpack_require__(969)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,core_contract_1,SDK,ABTesting){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.initAzureNotebooks=exports.isADO2019=exports.isUserInSingleIframeTestGroup=void 0;core_contract_1=__importDefault(core_contract_1);SDK=__importStar(SDK);ABTesting=__importStar(ABTesting);var SINGLE_IFRAME_TEST_GROUP="single_iframe_group";var abTest=ABTesting.createTest("single_iframe",[{name:SINGLE_IFRAME_TEST_GROUP,weight:0.2},{name:"control_group",weight:0.8}]);
/**
     * Picks a random regional resource (if defined) to spread the load over several regions
     * @returns
     */
function getRandomResource(){if({"regional":[{"resourceUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net","validateUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net/api/notebookresource/ado/validate/westeurope"},{"resourceUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net/api/notebookresource/ado/validate/westcentralus"},{"resourceUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net","validateUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net/api/notebookresource/ado/validate/westus2"},{"resourceUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net","validateUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net/api/notebookresource/ado/validate/eastus"},{"resourceUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net/api/notebookresource/ado/validate/southcentralus"}],"global":{"resourceUrl":"https://azdevops-extension.notebooks.azure.net","validateUrl":"https://azdevops-extension.notebooks.azure.net/api/notebookresource/ado/validate"}}.regional&&{"regional":[{"resourceUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net","validateUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net/api/notebookresource/ado/validate/westeurope"},{"resourceUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net/api/notebookresource/ado/validate/westcentralus"},{"resourceUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net","validateUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net/api/notebookresource/ado/validate/westus2"},{"resourceUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net","validateUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net/api/notebookresource/ado/validate/eastus"},{"resourceUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net/api/notebookresource/ado/validate/southcentralus"}],"global":{"resourceUrl":"https://azdevops-extension.notebooks.azure.net","validateUrl":"https://azdevops-extension.notebooks.azure.net/api/notebookresource/ado/validate"}}.useGlobal!==true){var index=Math.floor(Math.random()*{"regional":[{"resourceUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net","validateUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net/api/notebookresource/ado/validate/westeurope"},{"resourceUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net/api/notebookresource/ado/validate/westcentralus"},{"resourceUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net","validateUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net/api/notebookresource/ado/validate/westus2"},{"resourceUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net","validateUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net/api/notebookresource/ado/validate/eastus"},{"resourceUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net/api/notebookresource/ado/validate/southcentralus"}],"global":{"resourceUrl":"https://azdevops-extension.notebooks.azure.net","validateUrl":"https://azdevops-extension.notebooks.azure.net/api/notebookresource/ado/validate"}}.regional.length);return __WRAPPED_get({"regional":[{"resourceUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net","validateUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net/api/notebookresource/ado/validate/westeurope"},{"resourceUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net/api/notebookresource/ado/validate/westcentralus"},{"resourceUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net","validateUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net/api/notebookresource/ado/validate/westus2"},{"resourceUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net","validateUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net/api/notebookresource/ado/validate/eastus"},{"resourceUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net/api/notebookresource/ado/validate/southcentralus"}],"global":{"resourceUrl":"https://azdevops-extension.notebooks.azure.net","validateUrl":"https://azdevops-extension.notebooks.azure.net/api/notebookresource/ado/validate"}}.regional,index);}return{"regional":[{"resourceUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net","validateUrl":"https://azdevops-extension-westeurope.westeurope.notebooks.azure.net/api/notebookresource/ado/validate/westeurope"},{"resourceUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-westcentralus.westcentralus.notebooks.azure.net/api/notebookresource/ado/validate/westcentralus"},{"resourceUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net","validateUrl":"https://azdevops-extension-westus2.westus2.notebooks.azure.net/api/notebookresource/ado/validate/westus2"},{"resourceUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net","validateUrl":"https://azdevops-extension-eastus.eastus.notebooks.azure.net/api/notebookresource/ado/validate/eastus"},{"resourceUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net","validateUrl":"https://azdevops-extension-southcentralus.southcentralus.notebooks.azure.net/api/notebookresource/ado/validate/southcentralus"}],"global":{"resourceUrl":"https://azdevops-extension.notebooks.azure.net","validateUrl":"https://azdevops-extension.notebooks.azure.net/api/notebookresource/ado/validate"}}.global;}
/**
     * Decides based on user ID if we should test single iframe on them
     * @returns
     */
function isUserInSingleIframeTestGroup(){return(__awaiter(this,void 0,void 0,function(){var user,testGroup,override,isAdo2019;return(__generator(this,function(_a){switch(_a.label){case 0:user=SDK.getUser();testGroup=abTest.getGroup(user.id);override=window.AZNB_ENABLE_SINGLE_IFRAME;return[4 /*yield*/,isADO2019()];case 1:isAdo2019=_a.sent();
// Return true if user is in test group and not using ADO server 2019

return[2 /*return*/,override!==undefined?override:testGroup===SINGLE_IFRAME_TEST_GROUP&&!isAdo2019];}}));}));}exports.isUserInSingleIframeTestGroup=isUserInSingleIframeTestGroup;
/** Checks if this is ADO 2019 */
function isADO2019(){return __awaiter(this,void 0,void 0,function(){var navigationSvc;return __generator(this,function(_a){switch(_a.label){case 0:return[4 /*yield*/,SDK.getService("ms.vss-features.host-navigation-service" /* CommonServiceIds.HostNavigationService */)];case 1:navigationSvc=_a.sent();return[2 /*return*/,navigationSvc.getQueryParams===undefined];}});});}exports.isADO2019=isADO2019;function initAzureNotebooks(adoAppToken,overrides){return __awaiter(this,void 0,void 0,function(){var resource,defaults,initArgs;var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:resource=getRandomResource();defaults={userHasGivenCookieConsent:true,getResourceAccessToken:function(){return __awaiter(_this,void 0,void 0,function(){var nbTokensRes,nbTokens,_a;return __generator(this,function(_b){switch(_b.label){case 0:_b.trys.push([0,3,,4]);return[4 /*yield*/,fetch(resource.validateUrl,{method:"POST",headers:{Authorization:"Bearer ".concat(adoAppToken)}})];case 1:nbTokensRes=_b.sent();if(!nbTokensRes.ok){throw new Error("Error fetching tokens");}return[4 /*yield*/,nbTokensRes.json()];case 2:nbTokens=_b.sent();return[2 /*return*/,{notebookResourceId:nbTokens.notebookResourceId,accessToken:nbTokens.access_token,refreshToken:nbTokens.refresh_token}];case 3:_a=_b.sent();return[2 /*return*/,{notebookResourceId:"dummy",accessToken:null,refreshToken:null}];case 4:return[2 /*return*/];}});});},resourceUrl:resource.resourceUrl};initArgs=overrides?__assign(__assign({},defaults),overrides):defaults;return[4 /*yield*/,core_contract_1.default.init(initArgs)];case 1:_a.sent();return[2 /*return*/];}});});}exports.initAzureNotebooks=initAzureNotebooks;}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/5174:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;var desc=Object.getOwnPropertyDescriptor(m,k);if(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable)){desc={enumerable:true,get:function(){return __WRAPPED_get(m,k);}};}Object.defineProperty(o,k2,desc);}:function(o,m,k,k2){if(k2===undefined)k2=k;__WRAPPED_set(o,k2,'=',__WRAPPED_get(m,k));});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&__WRAPPED_set(g,Symbol.iterator,'=',function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__,exports,__webpack_require__(4663),__webpack_require__(4584),__webpack_require__(2379),__webpack_require__(138),__webpack_require__(6080)],__WEBPACK_AMD_DEFINE_RESULT__=(function(require,exports,SDK,azure_devops_extension_api_1,GitClient_1,AznbUtils_1,core_contract_1){"use strict";Object.defineProperty(exports,"__esModule",{value:true});SDK=__importStar(SDK);core_contract_1=__importStar(core_contract_1);var initFinished=false;
/**
     * Menu
     */
var exportMenuItem={text:"Export",title:"Export",groupId:"export",iconName:"Export",childItems:[{text:getFormatDisplayString(core_contract_1.ExportFormat.Html),title:getFormatDisplayString(core_contract_1.ExportFormat.Html),groupId:"export",action:function(actionContext){onItemClick(actionContext,core_contract_1.ExportFormat.Html);}},{text:getFormatDisplayString(core_contract_1.ExportFormat.LaTeX),title:getFormatDisplayString(core_contract_1.ExportFormat.LaTeX),groupId:"export",action:function(actionContext){onItemClick(actionContext,core_contract_1.ExportFormat.LaTeX);}},{text:getFormatDisplayString(core_contract_1.ExportFormat.Python),title:getFormatDisplayString(core_contract_1.ExportFormat.Python),groupId:"export",action:function(actionContext){onItemClick(actionContext,core_contract_1.ExportFormat.Python);}}]};var action={getMenuItems:function(menuId,context){if(context.item.path.endsWith(".ipynb")){return[exportMenuItem];}return[];}};
/**
     * Supporting functions
     */
function init(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4 /*yield*/,SDK.ready()];case 1:_a.sent();SDK.register(SDK.getContributionId(),action);return[2 /*return*/];}});});}
/**
     * Fix the bug that caused RangeError when exporting a file with extremly long content segments. For example, you can
     * repro that bug when running `String.fromCharCode.apply(null, new Uint8Array(1000000))`
     */
function arrayBufferToString(buffer){var content='';var bytes=new Uint8Array(buffer);var len=bytes.byteLength;for(var i=0;i<len;i++){content+=String.fromCharCode(__WRAPPED_get(bytes,i));}return content;}
/**
     * Requests the ipynb content from the server
     * @param {*} context The event context, needed for values on the file
     * @returns JSON string (ipynb)
     */
function getFileContentFromContext(context){return __awaiter(this,void 0,void 0,function(){var gitClient,blob,ipynbContent;return __generator(this,function(_a){switch(_a.label){case 0:gitClient=(0,azure_devops_extension_api_1.getClient)(GitClient_1.GitRestClient);return[4 /*yield*/,gitClient.getBlobContent(context.gitRepository.id,context.item.item.objectId.full)];case 1:blob=_a.sent();ipynbContent=arrayBufferToString(blob);return[2 /*return*/,ipynbContent];}});});}
/**
     * Gets a filename from the context
     * @param {*} context The event context, needed for values on the file
     */
function getFileNameFromContext(context){var filename=context.item.path;var lastSlashIndex=filename.lastIndexOf("/");if(lastSlashIndex&&lastSlashIndex+1<filename.length){filename=filename.substr(lastSlashIndex+1);}return filename;}
/**
     * Displays a message to the user via a banner at the top of the screen
     * @param message
     */
function displayMessage(message){return __awaiter(this,void 0,void 0,function(){var messagesService;return __generator(this,function(_a){switch(_a.label){case 0:return[4 /*yield*/,SDK.getService("ms.vss-tfs-web.tfs-global-messages-service" /* CommonServiceIds.GlobalMessagesService */)];case 1:messagesService=_a.sent();messagesService.addToast({message:message,duration:5*1000});return[2 /*return*/];}});});}function exportNotebook(ipynbContent,exportFormat,filename){return __awaiter(this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){return[2 /*return*/,new Promise(function(resolve,reject){return __awaiter(_this,void 0,void 0,function(){var expNb_1,error_1;return __generator(this,function(_a){switch(_a.label){case 0:_a.trys.push([0,2,,3]);return[4 /*yield*/,core_contract_1.default.createNotebook({filePath:"NA",parentElementId:"aznbnotebookcompt",config:{export:{enableExport:true}}},ipynbContent)];case 1:expNb_1=_a.sent();expNb_1.onExportComplete(function(event){if(event.success){resolve();}reject(event.errorCode);expNb_1.dispose();});__WRAPPED_call(expNb_1,'export')(exportFormat,{download:true,showMessages:false,filename:filename});return[3 /*break*/,3];case 2:error_1=_a.sent();reject(error_1);return[3 /*break*/,3];case 3:return[2 /*return*/];}});});})];});});}function getFormatDisplayString(format){switch(format){case core_contract_1.ExportFormat.Html:return"HTML";case core_contract_1.ExportFormat.LaTeX:return"LaTeX";case core_contract_1.ExportFormat.Python:return"Python";case core_contract_1.ExportFormat.Notebook:return"Notebook";}}
/**
     * Called when the menu button is clucked
     * @param context Event context - has info on the file
     * @param format Export format
     */
var onItemClick=function(context,format){return __awaiter(void 0,void 0,void 0,function(){var _a,ipynbContent,filename,e_1;return __generator(this,function(_b){switch(_b.label){case 0:displayMessage("".concat(getFormatDisplayString(format)," export started. Please wait. Your download will start automatically once it is complete"));_b.label=1;case 1:_b.trys.push([1,7,,8]);if(!!initFinished)return[3 /*break*/,4];_a=AznbUtils_1.initAzureNotebooks;return[4 /*yield*/,SDK.getAppToken()];case 2:return[4 /*yield*/,_a.apply(void 0,[_b.sent()])];case 3:_b.sent();initFinished=true;_b.label=4;case 4:return[4 /*yield*/,getFileContentFromContext(context)];case 5:ipynbContent=_b.sent();filename=getFileNameFromContext(context);return[4 /*yield*/,exportNotebook(ipynbContent,format,filename)];case 6:_b.sent();return[3 /*break*/,8];case 7:e_1=_b.sent();displayMessage("An error has occured while exporting: ".concat(e_1));return[3 /*break*/,8];case 8:return[2 /*return*/];}});});};SDK.init();init();}).apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));


/***/},

/***/7147:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);
/* harmony export */__webpack_require__.d(__webpack_exports__,{
/* harmony export */"DOMException":()=>(/* binding */DOMException),
/* harmony export */"Headers":()=>(/* binding */Headers),
/* harmony export */"Request":()=>(/* binding */Request),
/* harmony export */"Response":()=>(/* binding */Response),
/* harmony export */"fetch":()=>(/* binding */fetch)
/* harmony export */});var support={searchParams:'URLSearchParams'in self,iterable:'Symbol'in self&&'iterator'in Symbol,blob:'FileReader'in self&&'Blob'in self&&(function(){try{new Blob();return true;}catch(e){return false;}}()),formData:'FormData'in self,arrayBuffer:'ArrayBuffer'in self};function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj);}if(support.arrayBuffer){var viewClasses=['[object Int8Array]','[object Uint8Array]','[object Uint8ClampedArray]','[object Int16Array]','[object Uint16Array]','[object Int32Array]','[object Uint32Array]','[object Float32Array]','[object Float64Array]'];var isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1;};}function normalizeName(name){if(typeof name!=='string'){name=String(name);}if(/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name)||name===''){throw new TypeError('Invalid character in header field name');}return name.toLowerCase();}function normalizeValue(value){if(typeof value!=='string'){value=String(value);}return value;}

// Build a destructive iterator for the value list

function iteratorFor(items){var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value};}};if(support.iterable){__WRAPPED_set(iterator,Symbol.iterator,'=',function(){return iterator;});}return iterator;}function Headers(headers){this.map={};if(headers instanceof Headers){headers.forEach(function(value,name){this.append(name,value);},this);}else if(Array.isArray(headers)){headers.forEach(function(header){this.append(header[0],header[1]);},this);}else if(headers){Object.getOwnPropertyNames(headers).forEach(function(name){this.append(name,__WRAPPED_get(headers,name));},this);}}Headers.prototype.append=function(name,value){name=normalizeName(name);value=normalizeValue(value);var oldValue=__WRAPPED_get(this.map,name);__WRAPPED_set(this.map,name,'=',oldValue?oldValue+', '+value:value);};Headers.prototype['delete']=function(name){delete this.map[normalizeName(name)];};Headers.prototype.get=function(name){name=normalizeName(name);return this.has(name)?__WRAPPED_get(this.map,name):null;};Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name));};Headers.prototype.set=function(name,value){__WRAPPED_set(this.map,normalizeName(name),'=',normalizeValue(value));};Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map){if(this.map.hasOwnProperty(name)){callback.call(thisArg,__WRAPPED_get(this.map,name),name,this);}}};Headers.prototype.keys=function(){var items=[];this.forEach(function(value,name){items.push(name);});return iteratorFor(items);};Headers.prototype.values=function(){var items=[];this.forEach(function(value){items.push(value);});return iteratorFor(items);};Headers.prototype.entries=function(){var items=[];this.forEach(function(value,name){items.push([name,value]);});return iteratorFor(items);};if(support.iterable){__WRAPPED_set(Headers.prototype,Symbol.iterator,'=',Headers.prototype.entries);}function consumed(body){if(body.bodyUsed){return Promise.reject(new TypeError('Already read'));}body.bodyUsed=true;}function fileReaderReady(reader){return new Promise(function(resolve,reject){reader.onload=function(){resolve(reader.result);};reader.onerror=function(){reject(reader.error);};});}function readBlobAsArrayBuffer(blob){var reader=new FileReader();var promise=fileReaderReady(reader);reader.readAsArrayBuffer(blob);return promise;}function readBlobAsText(blob){var reader=new FileReader();var promise=fileReaderReady(reader);reader.readAsText(blob);return promise;}function readArrayBufferAsText(buf){var view=new Uint8Array(buf);var chars=new Array(view.length);for(var i=0;i<view.length;i++){__WRAPPED_set(chars,i,'=',String.fromCharCode(__WRAPPED_get(view,i)));}return chars.join('');}function bufferClone(buf){if(buf.slice){return buf.slice(0);}else{var view=new Uint8Array(buf.byteLength);view.set(new Uint8Array(buf));return view.buffer;}}function Body(){this.bodyUsed=false;this._initBody=function(body){
/*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
this.bodyUsed=this.bodyUsed;this._bodyInit=body;if(!body){this._bodyText='';}else if(typeof body==='string'){this._bodyText=body;}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){this._bodyBlob=body;}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){this._bodyFormData=body;}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this._bodyText=body.toString();}else if(support.arrayBuffer&&support.blob&&isDataView(body)){this._bodyArrayBuffer=bufferClone(body.buffer);
// IE 10-11 can't handle a DataView body.

this._bodyInit=new Blob([this._bodyArrayBuffer]);}else if(support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))){this._bodyArrayBuffer=bufferClone(body);}else{this._bodyText=body=Object.prototype.toString.call(body);}if(!this.headers.get('content-type')){if(typeof body==='string'){this.headers.set('content-type','text/plain;charset=UTF-8');}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set('content-type',this._bodyBlob.type);}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this.headers.set('content-type','application/x-www-form-urlencoded;charset=UTF-8');}}};if(support.blob){this.blob=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return Promise.resolve(this._bodyBlob);}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]));}else if(this._bodyFormData){throw new Error('could not read FormData body as blob');}else{return Promise.resolve(new Blob([this._bodyText]));}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){return consumed(this)||Promise.resolve(this._bodyArrayBuffer);}else{return this.blob().then(readBlobAsArrayBuffer);}};}this.text=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return readBlobAsText(this._bodyBlob);}else if(this._bodyArrayBuffer){return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));}else if(this._bodyFormData){throw new Error('could not read FormData body as text');}else{return Promise.resolve(this._bodyText);}};if(support.formData){this.formData=function(){return this.text().then(decode);};}this.json=function(){return this.text().then(JSON.parse);};return this;}

// HTTP methods whose capitalization should be normalized

var methods=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];function normalizeMethod(method){var upcased=method.toUpperCase();return methods.indexOf(upcased)>-1?upcased:method;}function Request(input,options){options=options||{};var body=options.body;if(input instanceof Request){if(input.bodyUsed){throw new TypeError('Already read');}this.url=input.url;this.credentials=input.credentials;if(!options.headers){this.headers=new Headers(input.headers);}this.method=input.method;this.mode=input.mode;this.signal=input.signal;if(!body&&input._bodyInit!=null){body=input._bodyInit;input.bodyUsed=true;}}else{this.url=String(input);}this.credentials=options.credentials||this.credentials||'same-origin';if(options.headers||!this.headers){this.headers=new Headers(options.headers);}this.method=normalizeMethod(options.method||this.method||'GET');this.mode=options.mode||this.mode||null;this.signal=options.signal||this.signal;this.referrer=null;if((this.method==='GET'||this.method==='HEAD')&&body){throw new TypeError('Body not allowed for GET or HEAD requests');}this._initBody(body);}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit});};function decode(body){var form=new FormData();body.trim().split('&').forEach(function(bytes){if(bytes){var split=bytes.split('=');var name=split.shift().replace(/\+/g,' ');var value=split.join('=').replace(/\+/g,' ');form.append(decodeURIComponent(name),decodeURIComponent(value));}});return form;}function parseHeaders(rawHeaders){var headers=new Headers();
// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space

// https://tools.ietf.org/html/rfc7230#section-3.2

var preProcessedHeaders=rawHeaders.replace(/\r?\n[\t ]+/g,' ');preProcessedHeaders.split(/\r?\n/).forEach(function(line){var parts=line.split(':');var key=parts.shift().trim();if(key){var value=parts.join(':').trim();headers.append(key,value);}});return headers;}Body.call(Request.prototype);function Response(bodyInit,options){if(!options){options={};}this.type='default';this.status=options.status===undefined?200:options.status;this.ok=this.status>=200&&this.status<300;this.statusText='statusText'in options?options.statusText:'';this.headers=new Headers(options.headers);this.url=options.url||'';this._initBody(bodyInit);}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url});};Response.error=function(){var response=new Response(null,{status:0,statusText:''});response.type='error';return response;};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(redirectStatuses.indexOf(status)===-1){throw new RangeError('Invalid status code');}return new Response(null,{status:status,headers:{location:url}});};var DOMException=self.DOMException;try{new DOMException();}catch(err){DOMException=function(message,name){this.message=message;this.name=name;var error=Error(message);this.stack=error.stack;};DOMException.prototype=Object.create(Error.prototype);DOMException.prototype.constructor=DOMException;}function fetch(input,init){return(new Promise(function(resolve,reject){var request=new Request(input,init);if(request.signal&&request.signal.aborted){return reject(new DOMException('Aborted','AbortError'));}var xhr=new XMLHttpRequest();function abortXhr(){xhr.abort();}xhr.onload=function(){var options={status:xhr.status,statusText:xhr.statusText,headers:parseHeaders(xhr.getAllResponseHeaders()||'')};options.url='responseURL'in xhr?xhr.responseURL:options.headers.get('X-Request-URL');var body='response'in xhr?xhr.response:xhr.responseText;setTimeout(function(){resolve(new Response(body,options));},0);};xhr.onerror=function(){setTimeout(function(){reject(new TypeError('Network request failed'));},0);};xhr.ontimeout=function(){setTimeout(function(){reject(new TypeError('Network request failed'));},0);};xhr.onabort=function(){setTimeout(function(){reject(new DOMException('Aborted','AbortError'));},0);};function fixUrl(url){try{return url===''&&__WRAPPED_get(self,'location').href?__WRAPPED_get(self,'location').href:url;}catch(e){return url;}}xhr.open(request.method,fixUrl(request.url),true);if(request.credentials==='include'){xhr.withCredentials=true;}else if(request.credentials==='omit'){xhr.withCredentials=false;}if('responseType'in xhr){if(support.blob){xhr.responseType='blob';}else if(support.arrayBuffer&&request.headers.get('Content-Type')&&request.headers.get('Content-Type').indexOf('application/octet-stream')!==-1){xhr.responseType='arraybuffer';}}request.headers.forEach(function(value,name){xhr.setRequestHeader(name,value);});if(request.signal){request.signal.addEventListener('abort',abortXhr);xhr.onreadystatechange=function(){
// DONE (success or failure)

if(xhr.readyState===4){request.signal.removeEventListener('abort',abortXhr);}};}xhr.send(typeof request._bodyInit==='undefined'?null:request._bodyInit);}));}fetch.polyfill=true;if(!self.fetch){self.fetch=fetch;self.Headers=Headers;self.Request=Request;self.Response=Response;}


/***/},

/***/6494:module=>{"use strict";module.exports={"version":"3.1.8"};

/***/}

/******/};
/************************************************************************/
/******/// The module cache

/******/var __webpack_module_cache__={};
/******/
/******/// The require function

/******/function __webpack_require__(moduleId){
/******/// Check if module is in cache

/******/var cachedModule=__WRAPPED_get(__webpack_module_cache__,moduleId);
/******/if(cachedModule!==undefined){
/******/return cachedModule.exports;
/******/}
/******/// Create a new module (and put it into the cache)

/******/var module=__WRAPPED_set(__webpack_module_cache__,moduleId,'=',{
/******/// no module.id needed

/******/// no module.loaded needed

/******/exports:{}
/******/});
/******/
/******/// Execute the module function

/******/__WRAPPED_get(__webpack_modules__,moduleId).call(module.exports,module,module.exports,__webpack_require__);
/******/
/******/// Return the exports of the module

/******/return module.exports;
/******/}
/******/
/************************************************************************/
/******//* webpack/runtime/define property getters */
/******/(()=>{
/******/// define getter functions for harmony exports

/******/__webpack_require__.d=(exports,definition)=>{
/******/for(var key in definition){
/******/if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){
/******/Object.defineProperty(exports,key,{enumerable:true,get:__WRAPPED_get(definition,key)});
/******/}
/******/}
/******/};
/******/})();
/******/
/******//* webpack/runtime/global */
/******/(()=>{
/******/__webpack_require__.g=(function(){
/******/if(typeof globalThis==='object')return globalThis;
/******/try{
/******/return this||new Function('return this')();
/******/}catch(e){
/******/if(typeof window==='object')return window;
/******/}
/******/}());
/******/})();
/******/
/******//* webpack/runtime/hasOwnProperty shorthand */
/******/(()=>{
/******/__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))
/******/;})();
/******/
/******//* webpack/runtime/make namespace object */
/******/(()=>{
/******/// define __esModule on exports

/******/__webpack_require__.r=exports=>{
/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){
/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});
/******/}
/******/Object.defineProperty(exports,'__esModule',{value:true});
/******/};
/******/})();
/******/
/************************************************************************/
/******/
/******/// startup

/******/// Load entry module and return exports

/******/// This entry module is referenced by other modules so it can't be inlined

/******/var __webpack_exports__=__webpack_require__(5174);
/******/

/******/})();