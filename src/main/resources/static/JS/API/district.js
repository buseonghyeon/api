$(document).ready(function() {
    // 시/군/구 선택 시 동적으로 해당 지역의 동/읍/면 옵션을 설정
    $('#city').change(function() {
        var selectedCity = $(this).val();
        switch (selectedCity) {
            case 'h1':
                setDistrictOptions(['안서동', '신부동', '청수동']);
                break;
            case 'h2':
                setDistrictOptions(['두정동', '불당동']);
                break;
            default:
                setDistrictOptions([]);
        }
    });

    // 동/읍/면 옵션 설정 함수
    function setDistrictOptions(options) {
        var districtSelect = $('#district');
        districtSelect.empty(); // 기존 옵션 제거
        if (options.length === 0) {
            districtSelect.append($('<option>', {value: '', selected: true, disabled: true, hidden: true}).text('동/읍/면'));
        } else {
            options.forEach(function(option) {
                districtSelect.append($('<option>', {value: option}).text(option));
            });
        }
    }
});
