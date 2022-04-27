import * as React from 'react';

interface MethodsProps {

  /** 数据脱敏展示 */
  formatInfo: (info: string, startIdx: number, endIdx: number) => string;

  /** 判断是否ie浏览器 */
  isIeBrowser: () => boolean;

  /** 根据url或blob下载文件 */
  downLoadLink: (urlOrBlob: string & Blob, fileName: string, type: number) => void;
}

export const Methods: React.FC<MethodsProps> = () => (<div />);

