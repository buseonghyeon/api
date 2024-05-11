// 주소 검색 함수
function handleAddressSearch() {
    var address = $('#address').val();
    searchAddressToCoordinate(address);
}

$(document).ready(function() {
    // 시/군/구 선택 시 주소 입력 필드에 자동으로 값 설정
    $('#city').change(function() {
        updateAddress();
    });

    // 동/읍/면 선택 시 주소 입력 필드에 자동으로 값 설정
    $('#district').change(function() {
        updateAddress();
    });

    // "주소검색" 버튼 클릭 시 주소 검색 실행
    $('#submit').click(function() {
        handleAddressSearch();
    });

    // 주소 입력 필드 업데이트 함수
    function updateAddress() {
        var city = $('#city option:selected').text();
        var district = $('#district option:selected').text();
        $('#address').val(city + ' ' + district);
    }


});

