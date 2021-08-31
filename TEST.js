<script>
function newPoint(time) {
      var radius = 0.01;
      var x = Math.random() * radius;
      var y = Math.random() * radius;
      return {lat:window.lat + y, lng:window.lng + x};
        }
      setInterval(function() {
      pubnub.publish({channel:pnChannel, message:newPoint()});
      }, 500);
</script>
