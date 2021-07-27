$(document).ready(function () {

    $(document).click(function (e) {

        if (e.target.id !== 'shareImage') {
            $('.social-network-box').hide('slow');
            $('#shareImage').removeClass('share-active change-pos').addClass('share-light');
            $('#shareImage img').attr('src', './images/icon-share.svg')
        }

    });

    $('#shareImage').click(function (e) {
        e.stopPropagation()
        $('.social-network-box').show();
        $('#shareImage').removeClass('share-light').addClass('share-active change-pos');
        $('#shareImage img').attr('src', './images/icon-share-active.svg')
    });
});