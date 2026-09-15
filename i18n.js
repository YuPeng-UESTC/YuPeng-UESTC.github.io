(function() {
  var btnText = { zh: "🌐 English", en: "🌐 中文" };
  var pageTitle = {
    zh: "彭宇 | 个人主页",
    en: "Yu Peng | Homepage"
  };

  function setLang(lang) {
    document.querySelectorAll("[data-en]").forEach(function(el) {
      el.textContent = el.getAttribute("data-" + lang);
    });
    document.querySelectorAll(".i18n-name").forEach(function(el) {
      el.textContent = lang === "en" ? "Yu Peng" : "彭宇";
    });
    document.title = pageTitle[lang];
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = btnText[lang];
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    localStorage.setItem("site-lang", lang);
  }

  document.addEventListener("DOMContentLoaded", function() {
    // 默认英文；如果用户之前手动切过，则记住选择
    var saved = localStorage.getItem("site-lang") || "en";
    setLang(saved);
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function() {
        var cur = localStorage.getItem("site-lang") || "en";
        setLang(cur === "zh" ? "en" : "zh");
      });
    }
  });
})();
