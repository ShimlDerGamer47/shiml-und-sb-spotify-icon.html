document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement || document.querySelector("html");
    const body = document.body || document.querySelector("body");

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    const def = "default";
    const none = "none";

    const diamond = "#";
    const get = (id) =>
      document.getElementById(id) || document.querySelector(diamond + id);

    const spotifyIconImgBgDiv = get("spotifyIconImgBgContainerId");
    const spotifyIconBgDiv = get("spotifyIconBgContainerId");
    const spotifyIconImg = get("spotifyIconImgId");
    if (!spotifyIconImg.src || !spotifyIconImg.alt) {
      const spotifyImgPathFile =
        "Img Ordner/Icon Img Ordner/Spotify Icon Ordner/LogosSpotifyIcon.png";
      const spotifyImgAltText = "Spotify Icon";

      spotifyIconImg.src = spotifyImgPathFile;
      spotifyIconImg.alt = spotifyImgAltText;
    }

    (function htmlElementsSecurityToken() {
      try {
        const elementArray = [
          body,
          spotifyIconImgBgDiv,
          spotifyIconBgDiv,
          spotifyIconImg,
        ];
        const eventArray = [copy, dragstart, keydown, select];

        const styleData = [
          {
            fontFamily: robotoBold,
            webkitUserSelect: none,
            userSelect: none,
            cursor: def,
            pointerEvents: none,
          },
        ];

        elementArray.forEach((element) => {
          if (!element) return;

          eventArray.forEach((event) => {
            if (!event) return;

            element.addEventListener(event, (e) => e.preventDefault());
          });
        });

        elementArray.filter(Boolean).forEach((element) => {
          if (!element || !styleData[0]) return;

          if (element && styleData[0]) {
            Object.assign(element.style, styleData[0]);
          }
        });
      } catch (error) {
        console.error("Fehler beim Sichern der Elemente:", error);
      }
    })();
  } catch (error) {
    console.error("Haupt-Fehler:", error);
  }
});
