// 검색한 주소의 정보를 가져오기
function searchAddressToCoordinate(address) {
    naver.maps.Service.geocode({
        query: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }
        if (response.v2.meta.totalCount === 0) {
            return alert('올바른 주소를 입력해주세요.');
        }
        var item = response.v2.addresses[0];
        var latitude = item.y; // 위도
        var longitude = item.x; // 경도


        // 위도와 경도를 LCC DFS 좌표변환 함수를 이용하여 변환
        var convertedCoords = dfs_xy_conv("toXY", latitude, longitude);
        var gridX = convertedCoords.x;
        var gridY = convertedCoords.y;


        // 현재 시간과 날짜 가져오기
        var now = new Date();
        var options = { hour12: false, hour: '2-digit', minute: '2-digit' };
        var currentTime = now.toLocaleTimeString('en-US', options).replace(/:/g, ''); // Format: HHmm
        var year = now.getFullYear(); // 년도
        var month = now.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
        var day = now.getDate(); // 일

        // 월과 일이 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 만듭니다.
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        var currentDate = year + month + day;


        // 변환된 좌표를 이용하여 주소 정보 삽입 함수 호출
        insertAddress(address, latitude, longitude, gridX, gridY, currentTime, currentDate);
        console.log(gridX,gridY,currentTime,currentDate);
    });


}
