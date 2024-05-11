function insertAddress(address, latitude, longitude, gridX, gridY, currentTime, currentDate) {
    $('#mapList').empty();

    var mapList = "";
    mapList += "<tr>"
    mapList += "   <td>" + address + "</td>"
    mapList += "   <td>" + latitude + "</td>"
    mapList += "   <td>" + longitude + "</td>"
    mapList += "   <td>" + gridX + "</td>"
    mapList += "   <td>" + gridY + "</td>"
    mapList += "   <td>" + currentDate + "</td>"
    mapList += "   <td>" + currentTime + "</td>"
    mapList += "</tr>"

    $('#mapList').append(mapList);

    // 변환된 좌표를 이용하여 지도에 마커 표시
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 14
    });
    var marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(latitude, longitude),
    });
}