import * as React from 'react';
interface MethodsProps {
    formatInfo: (info: string, startIdx: number, endIdx: number) => string;
    isIeBrowser: () => boolean;
    downLoadLink: (urlOrBlob: string & Blob, fileName: string, type: number) => void;
}
export declare const Methods: React.FC<MethodsProps>;
export {};
