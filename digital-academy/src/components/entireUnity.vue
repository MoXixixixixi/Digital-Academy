<template>
  <div class="entireUnity">
    <div class="txt">
      <p>首次载入约一分钟</p>
      <p>请稍作等待</p>
    </div>
    <div class="unityContainer">
      <iframe 
        id="unity"
        src="/static/unity/index.html" 
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entireUnity',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entireUnity {
  position: relative;
}
.txt {
  position: absolute;
  left: 45px;
}
.txt p {
  position: relative;
  top: 60px;
  writing-mode: vertical-lr;
  font-family: '华文行楷';
  font-size: 35px;
  color: #f4606c;
  letter-spacing: 4px;
  cursor: default;
}
.txt p:last-child {
  top: 0px;
  left: 70px;
  /* letter-spacing: 13px; */
}
.unityContainer {
  padding-top: 15px;
  width: 1000px;
  margin: 0 auto;
}
#unity {
  border: none;
  width: inherit;
  height: 650px;
}
</style>
