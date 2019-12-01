const AV = require('leancloud-storage');

const init = () => {
  if (!AV._appRouter) {
    // AV._appRouter.AV._config.applicationId
    AV.init({
      appId: "IF51p0jxxcS408UJahePXcwm-gzGzoHsz",
      appKey: "khWfQGh5ugzCFEoHI0HuHCeP",
      serverURLs: "https://if51p0jx.lc-cn-n1-shared.com"
    });
  }
}

export {
  init,
}