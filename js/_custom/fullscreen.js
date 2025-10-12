(() => {
  const FULLSCREEN_KEY = "isFullscreen";

  const isFullscreen = () =>
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  const requestFullscreen = async () => {
    const el = document.documentElement;
    if (el.requestFullscreen) await el.requestFullscreen();
    else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) await el.msRequestFullscreen();
  };

  const exitFullscreen = async () => {
    if (document.exitFullscreen) await document.exitFullscreen();
    else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
    else if (document.msExitFullscreen) await document.msExitFullscreen();
  };

  const updateIcons = () => {
    const buttons = document.querySelectorAll(".menu-item.fullscreen-toggle i");
    buttons.forEach((icon) => {
      if (isFullscreen()) {
        icon.classList.remove("fa-expand");
        icon.classList.add("fa-compress");
      } else {
        icon.classList.remove("fa-compress");
        icon.classList.add("fa-expand");
      }
    });
  };

  const toggleFullscreen = async () => {
    if (isFullscreen()) {
      await exitFullscreen();
      localStorage.removeItem(FULLSCREEN_KEY);
    } else {
      await requestFullscreen();
      localStorage.setItem(FULLSCREEN_KEY, "true");
    }
    updateIcons();
  };

  document.addEventListener("DOMContentLoaded", () => {
    // cari semua tombol fullscreen (desktop & mobile)
    const toggles = document.querySelectorAll(".menu-item.fullscreen-toggle");
    toggles.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleFullscreen();
      });
    });

    // sync ikon kalau user tekan F11 / keluar manual
    document.addEventListener("fullscreenchange", updateIcons);

    // restore state kalau sebelumnya fullscreen
    if (localStorage.getItem(FULLSCREEN_KEY) === "true") {
      requestFullscreen().then(updateIcons);
    }
  });

  // jaga-jaga kalau user resize (mobile ↔ desktop)
  window.addEventListener("resize", () => {
    updateIcons();
  });
})();
