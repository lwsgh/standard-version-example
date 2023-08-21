module.exports = {
  // 需要更新版本号的文件
  bumpFiles: [
    {
      filename: "MY_VERSION_TRACKER.txt",
      // The `plain-text` updater assumes the file contents represents the version.
      type: "plain-text",
    },
    {
      filename: "package.json",
      // The `json` updater assumes the version is available under a `version` key in the provided JSON document.
      type: "json",
    },
  ],
}