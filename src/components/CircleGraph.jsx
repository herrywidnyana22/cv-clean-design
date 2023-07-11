import React from 'react'

const style = {
    // /* PROGRESS BAR */

    // .progress-circle{
    // position: relative;
    // width: 200px;
    // height: 100px;
    // display: flex;
    // align-items: flex-end;
    // justify-content: center;
    // margin: auto;
    // color: #FFF;
    // font-size: 20px;
    // overflow: hidden;
    // }

    // .progress-circle::after{
    // content: '';
    // position: absolute;
    // left: 0;
    // top: 0;
    // width: 200px;
    // height: 200px;
    // border: 20px solid;
    // box-sizing: border-box;
    // border-color: var(--color-white) var(--color-white) var(--color-main) var(--color-main);
    // border-radius: 50%;
    // transform: rotate(calc(1deg *(-45 + (85 * 1.8))));
    // }
}

const CircleGraph = () => {
  return (
    <div className='progress-circle'>
        80%
    </div>
  )
}

export default CircleGraph