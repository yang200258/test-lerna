declare const navigator: Navigator & {
  msSaveBlob: any;
};

class Utils {
  isIeBrowser = (): boolean =>
    // 是否ie浏览器
    Boolean(window.ActiveXObject) || 'ActiveXObject' in window;

  formatInfo = (info: string, startIdx: number, endIdx: number): string => {
    if (!info) return '';
    return String(info).split('')
      .reduce((str, item, idx) => {
        if (idx < startIdx || idx > info.length - endIdx - 1) return str + item;
        return `${str}*`;
      }, '');
  }

  downLoadLink = (urlOrBlob: string & Blob, fileName: string, type: number = 1): void => {
    if ('download' in document.createElement('a')) {
      // 创建A标签
      const link = document.createElement('a');
      link.download = fileName;
      link.style.display = 'none';
      // 设置下载文件类型为xlsx 不同的类型type也不一样，创建URL对象
      link.href = type === 1 ? URL.createObjectURL(new Blob([urlOrBlob])) : urlOrBlob;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } else {
      navigator.msSaveBlob(new Blob([urlOrBlob]), fileName);
    }
  };
}

export default new Utils();
