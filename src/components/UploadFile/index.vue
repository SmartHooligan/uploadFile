<template>
  <div class="upload-container">
    <div class="upload-content">
      <!-- 左边内容 -->
      <div class="content-left">
        <div class="title">Finish!
          <br>
          Upload Your Resume
        </div>
        <div class="description">Upload your resume, the platform will help you parse and optimize, you can also skip
          this step</div>
      </div>

      <!-- 右边内容 -->
      <div class="content-right">
        <div class="right-title">Upload file</div>
        <div class="upload-box" @click="uploadFile">
          <div v-show="fileName" class="file-container">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wenjian"></use>
            </svg>
            <span>{{ fileName }}</span>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wenjianshangchuan-copy"></use>
          </svg>
          <p class="upload-text">
            Drag your resume file to this area, or click on the area to select the appropriate file
            to upload
          </p>
        </div>
        <div class="upload-btn">
          <button class="last-btn">Last step</button>
          <button class="finish-btn">Finish</button>
        </div>
        <!-- 卡片底部 -->
        <div class="upload-footer">
          <div class="icon-container1">
            <svg class="icon-check" aria-hidden="true">
              <use xlink:href="#icon-check1"></use>
            </svg>
          </div>
          <div class="icon-container2">
            <svg class="icon-check" aria-hidden="true">
              <use xlink:href="#icon-check1"></use>
            </svg>
          </div>
          <div class="icon-container3">
            <!-- <svg class="icon-check active" aria-hidden="true">
              <use xlink:href="#icon-check1"></use>
            </svg> -->
            <i style="color: #ffffff;">3</i>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <img src="../../assets/cat.png" class="cat-bg">

  </div>

</template>

<script setup lang='ts'>
import { fileOpen } from 'browser-fs-access';
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const fileName = ref<string>('')

const uploadFile = async () => {
  try {
    const file = await fileOpen({
      mimeTypes: ['image/*', 'text/*']
    });
    fileName.value = file.name
    ElMessage({
      message: '文件上传成功',
      type: 'success',
    })
  } catch (error) {
    ElMessage({
      message: '文件选择取消',
      type: 'warning',
    })
  }

}



</script>
<style lang="scss" scoped>
@import "../../utils/utils.scss";

.upload-container {
  width: vm(1920px);
  height: vh(1080px);
  background: #F8FBF9;

  .upload-content {
    width: vm(1920px);
    height: vh(1080px);
    display: flex;

    // flex-direction: row;
    .content-left {
      position: relative;
      left: vm(102px);
      top: vh(124px);

      .title {
        font-size: vm(40px);
        font-family: 'Inter';
        font-weight: 400;
        color: #000;
      }

      .description {
        font-size: vm(20px);
        font-family: 'Inter';
        font-weight: 400;
        color: #A5A5A5;
        width: vm(696px);
        height: vh(70px);
        margin-top: vh(20px);
      }
    }

    .content-right {
      width: vm(943px);
      height: vh(922px);
      position: relative;
      margin: auto;
      background-color: #fff;
      border-radius: vh(32px);
      box-shadow: 0 2px 20px 0 rgba(19, 67, 112, 0.15);
      z-index: 1;
      display: flex;
      justify-content: center;

      .right-title {
        font-size: vm(36px);
        font-family: 'Inter';
        font-weight: 500;
        color: #060326;
        position: absolute;
        left: vm(129px);
        top: vh(30px);
      }

      .upload-box {
        width: 85%;
        height: 40%;
        position: absolute;

        top: vh(118px);
        background-color: #F2FAFF;
        border: 1px solid transparent;
        border-radius: vh(15px);

        /* 使用背景渐变模拟边框 */
        background-image:
          linear-gradient(90deg, #0538BB 10px, transparent 10px),
          /* 上边框 */
          linear-gradient(90deg, #0538BB 10px, transparent 10px),
          /* 下边框 */
          linear-gradient(0deg, #0538BB 10px, transparent 10px),
          /* 左边框 */
          linear-gradient(0deg, #0538BB 10px, transparent 10px);
        /* 右边框 */
        background-size:
          20px 1px,
          /* 上边框：20px周期，1px高度 */
          20px 1px,
          /* 下边框 */
          1px 20px,
          /* 左边框：1px宽度，20px周期 */
          1px 20px;
        /* 右边框 */
        background-position:
          0 0,
          /* 上边框：左上角 */
          0 100%,
          /* 下边框：左下角 */
          0 0,
          /* 左边框：左上角 */
          100% 0;
        /* 右边框：右上角 */
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .file-container {
          left: 0;
          top: 0;
          position: absolute;
          width: 100%;
          height: 10%;
          display: flex;
          align-items: center;

          .icon {
            width: 10%;
            height: 100%;
            position: relative;
          }

          span {
            width: 90%;
            height: 100%;
            position: relative;
            font-size: vm(25px);
            font-family: 'Inter';
            font-weight: 400;
            color: #000;
            display: flex;
            align-items: center;
          }
        }

        .icon {
          width: vw(58px);
          height: vh(39px);
          overflow: hidden;
        }

        .upload-text {
          font-size: vm(16px);
          font-family: 'Inter';
          font-weight: 400;
          color: #A5A5A5;
          margin-top: vh(20px);
          max-width: vm(499px);
          text-align: center;
        }
      }

      .upload-box:hover {
        background-color: #e5edf6;
      }

      .upload-btn {
        position: absolute;
        top: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        height: 8%;


        .last-btn {
          width: 30%;
          height: 100%;
          background-color: #75ACFF;
          border-radius: vh(8px);
          font-size: vh(24px);
          font-family: 'Inter';
          font-weight: 400;
          color: #FFF;
          margin: auto;
        }



        .finish-btn {
          width: 30%;
          height: 100%;
          background-color: #1B5AFF;
          border-radius: vh(8px);
          font-size: vh(24px);
          font-family: 'Inter';
          font-weight: 400;
          color: #fff;
          margin: auto;

        }

        .last-btn:active,
        .finish-btn:active {
          transform: translateY(2px);
        }
      }

      .upload-footer {
        position: absolute;
        top: 90%;
        width: vm(343px);
        min-height: vm(40px);
        display: flex;
        align-items: center;

        .line {
          width: 100%;
          height: vh(4px);
          background-color: #85A7FF;
        }

        .icon-container1 {
          width: vm(26px);
          height: vm(26px);
          background: #85A7FF;
          border-radius: 50%;
          position: absolute;
          left: vm(32px);
          z-index: 1;
          border: vm(4px) solid #2A4CFE;
          box-shadow: 0 7px 64px 0 #00000012;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-container2 {
          width: vm(26px);
          height: vm(26px);
          background: #85A7FF;
          border-radius: 50%;
          position: absolute;
          left: vm(153px);
          z-index: 1;
          border: vm(4px) solid #2A4CFE;
          box-shadow: 0 7px 64px 0 #00000012;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-container3 {
          width: vm(26px);
          height: vm(26px);
          background: #85A7FF;
          border-radius: 50%;
          position: absolute;
          right: vm(32px);
          z-index: 1;
          border: vm(4px) solid #2A4CFE;
          box-shadow: 0 7px 64px 0 #00000012;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .cat-bg {
    position: absolute;
    left: vm(0px);
    bottom: vh(-45px);
    width: vm(763px);
    height: vh(569px);
  }
}

@media (max-width: 768px) {
  .upload-btn {
    flex-direction: column;
  }

  .upload-content {
    flex-direction: column;

    .content-right {
      width: 90% !important;
      height: 70% !important;
    }
  }
}
</style>