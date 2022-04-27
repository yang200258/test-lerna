declare class Utils {
    isIeBrowser: () => boolean;
    formatInfo: (info: string, startIdx: number, endIdx: number) => string;
    downLoadLink: (urlOrBlob: string & Blob, fileName: string, type?: number) => void;
}
declare const _default: Utils;
export default _default;
