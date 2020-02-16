const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
// 좌표를 가져오는데 성공했을때 처리하는 함수이다.
// 위도와 경도 불러오기
function handelGeoSucces(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
}
function handleGeoErro() {
    console.log('날씨를 읽어드릴수 없습니다.');
}
function askForCoords() {
    // navigator API
    navigator.geolocation.getCurrentPosition(handelGeoSucces, handleGeoErro);
}
function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        // getWeather 함수 호출
    }
}
function init() {
    loadCoords();
};

init();