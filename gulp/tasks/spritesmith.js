'use strict';

module.exports = function() {
    $.gulp.task('sprite', function () {
        var spriteData = $.gulp.src('./source/images/**/*.png')
        .pipe($.spritesmith({
            imgName: '../../assets/img/sprite.png',
            cssName: 'sprite.scss'
        }));
        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/components'));

        return $.merge(imgStream, cssStream);
        });
};
