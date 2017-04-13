		$(document).ready(function(){ 

			//Enable footer address map tool tip
			$('a[rel="mapTip"]').tooltip();


			var onePercentHeadScrolled = parseInt( $("#astonTriangle").css('top') , 10) / 100;
			var startLeft = parseInt( $("#astonTriangle").css('left') , 10);
			var beenScrolled = false;

			$(window).scroll(function() {


				var scroll = $(window).scrollTop();


				var percentScrolled = scroll / onePercentHeadScrolled;

				var newLeftPosPercent = ( percentScrolled / 100 ) * startLeft 

				$("#astonTriangle").css("transform","translate(" + -newLeftPosPercent +  "px , "  + ( scroll * -0.7)  + "px)");



				if(percentScrolled < 1 && beenScrolled){

							$('#astonTriangle').removeClass('animated');
							$('#astonTriangle').removeClass('pulse');
							$('#astonTriangle').addClass('animated');
							$('#astonTriangle').addClass('pulse');

							beenScrolled = false;

						} else if(percentScrolled > 150){
							
							beenScrolled = true;

						}


					});


			/////////	Video Tag resizing solution from: http://stackoverflow.com/questions/20818881/use-video-as-background-for-div , User: marcel_pi.
			/////////

			function scaleToFill() {
				$('video.fullscreen-bg__video').each(function(index, videoTag) {
					var $video = $(videoTag),
					videoRatio = videoTag.videoWidth / videoTag.videoHeight,
					tagRatio = $video.width() / $video.height(),
					val;

					if (videoRatio < tagRatio) {
						val = tagRatio / videoRatio * 1.02; <!-- size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges -->
					} else if (tagRatio < videoRatio) {
						val = videoRatio / tagRatio * 1.02;
					}

					$video.css('transform','scale(' + val  + ',' + val + ')');

				});    
			}



			$(function () {
				scaleToFill();

				$('.fullscreen-bg__video').on('loadeddata', scaleToFill);

				$(window).resize(function() {
					scaleToFill();
				});
			});


			/////////
			/////////END



			//?
			document.cookie = "EssentialTimes=Tuesdays and Thursdays, 6.30 - 8.30. 1st session is Free";



		}); 





		