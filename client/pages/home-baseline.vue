<template>
    <div class="layout">
        <div class="tester">

        ABCDEFG
        </div>

        <div class="card" :class="{'card--flipped': flipped}">
            <div class="contents">
                <div class="column">

                <div class="title">Jacob</div>
                <div class="title">Smith</div>
                <!-- <br>  -->
                <div class="line">
                    <span class="char">J</span>
                    <span class="char">a</span>
                    <span class="char">v</span>
                    <span class="char">a</span>
                    <span class="char">s</span>
                    <span class="char">c</span>
                    <span class="char">r</span>
                    <span class="char">i</span>
                    <span class="char">p</span>
                    <span class="char">t</span>
                    <span class="char"> </span>
                    <span class="char">F</span>
                    <span class="char">u</span>
                    <span class="char">n</span>
                    <span class="char">g</span>
                    <span class="char">i</span>
                    <span class="char">n</span>
                    <span class="char">e</span>
                    <span class="char">e</span>
                    <span class="char">r</span>
                    </div>
                <div class="line">
                    <span class="char">W</span>
                    <span class="char">e</span>
                    <span class="char">b</span>
                    <span class="char"> </span>
                    <span class="char">D</span>
                    <span class="char">e</span>
                    <span class="char">v</span>
                    <span class="char">e</span>
                    <span class="char">l</span>
                    <span class="char">o</span>
                    <span class="char">p</span>
                    <span class="char">e</span>
                    <span class="char">r</span>
                </div>
                <a href="mailto:js@jacobsmith.tech" class="link">
                    <span class="char">j</span>
                    <span class="char">s</span>
                    <span class="char">@</span>
                    <span class="char">j</span>
                    <span class="char">a</span>
                    <span class="char">c</span>
                    <span class="char">o</span>
                    <span class="char">b</span>
                    <span class="char">s</span>
                    <span class="char">m</span>
                    <span class="char">i</span>
                    <span class="char">t</span>
                    <span class="char">h</span>
                    <span class="char">.</span>
                    <span class="char">t</span>
                    <span class="char">e</span>
                    <span class="char">c</span>
                    <span class="char">h</span>
                </a>
                <a href="https://github.com/limeandcoconut" target="_blank" class="link">
                    <!-- <span class="char">h</span>
                    <span class="char">t</span>
                    <span class="char">t</span>
                    <span class="char">p</span>
                    <span class="char">s</span>
                    <span class="char">:</span>
                    <span class="char">/</span>
                    <span class="char">/</span> -->
                    <span class="char">g</span>
                    <span class="char">i</span>
                    <span class="char">t</span>
                    <span class="char">h</span>
                    <span class="char">u</span>
                    <span class="char">b</span>
                    <span class="char">.</span>
                    <span class="char">c</span>
                    <span class="char">o</span>
                    <span class="char">m</span>
                    <span class="char">/</span>
                    <span class="char">l</span>
                    <span class="char">i</span>
                    <span class="char">m</span>
                    <span class="char">e</span>
                    <span class="char">a</span>
                    <span class="char">n</span>
                    <span class="char">d</span>
                    <span class="char">c</span>
                    <span class="char">o</span>
                    <span class="char">c</span>
                    <span class="char">o</span>
                    <span class="char">n</span>
                    <span class="char">u</span>
                    <span class="char">t</span>
                </a>
            </div>
                <!-- <div class="sub"> -->

                    <!-- <div class="test">foo</div> -->
                <!-- </div> -->
                <!-- <div class="sub">
                </div> -->
            </div>
            <div class="contents card-back">
                "Hey! If you're a good developer why isn't this very fancy?""
                <br>
                <br>
                It's a minimalist statement. All the fancy is in the quality of execution
            </div>
        </div>

        <div class="tag" @click="flip">
            <br>
            Flip it.
            <br>
            <br>
        </div>
        <!-- <div class="cell"></div>
        <div class="cell"></div> -->
        <!-- <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div> -->
    </div>
        <!-- <router-link to="/foo">Foo</router-link> -->
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            flipped: false,
        }
    },
    meta() {
        return {
            title: 'Jacob Smith | Javascript Fungineer',
            useWholeTitle: true,
            description: 'A business card',
        }
    },
    mounted() {

    },
    methods: {
        flip() {
            this.flipped = !this.flipped
            console.log('yo')
        }
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';
@import '../styles/global.less';

.tester {
    .rubik(500);
    // .fz(giga);
    // font-size: 100px;
    // // height: 100px;
    // line-height: 1.5;
    border: 1px solid #000;
    // .baseline(60px)
    align-self: baseline;
    font-size: 60px;
    padding-top: unit((1.2 - @cap-height) / 2, em);
    line-height: 1.2em;
    // border-bottom: @b solid #000;
}

.layout {
    background-color: @red;
    display: grid;
    grid-template: auto / 1fr .basis(79)[] 1fr;
    align-items: center;
    justify-items: center;
    justify-content: center;
    // display: flex;
    // flex-direction: column;
    height: 100vh;
    .rubik(500);
    // .fz(xs);
    font-size: .basis(2)[];
    // .overlay(@greenline);

    .cell {
        background-color: black;
        width: 100%;
        height: 100px;

        &:nth-child(2n) {
            background-color: grey;
        }
    }

    &:hover {
        .card{

            // animation: cubic-bezier(0.04, 1, 0.01, 1) 3s card-flip both;
        }
        // transform: translateX(-100%) rotateY(-180deg)
        // animation-iteration-count: 1;
    }
}

@keyframes card-flip {
    0% {
        transform: none;
        box-shadow: #300 18px 18px 1px 8px;
    }

    // 30% {
        //     transform: translateX(60%);
    // }

    // 50% {
        //     transform: translateX(10%) rotateY(-90deg);
    //     // transform: translateX(10%);
    // }

    // 70% {
        //     transform: translateX(10%) rotateY(-180deg);
    //     // transform: translateX(40%);
    // }

    100% {
        transform: rotateY(-180deg);
        box-shadow: #300 -18px 18px 1px 8px;
        // transform: none;
    }
}

.tag {
    // .ratio(1, 1);
    background-color: white;
    grid-column: 3 / 1;
    width: 30%;
    text-align: center;
    position: relative;
    top: 20%;
    box-shadow: #422 1px 1px 1px 0px;
    cursor: pointer;
    // height: 30%;
}

.card {
    .ratio(7, 4, true);
    background-color: white;
    position: relative;
    // top: -9px;
    // width: .basis(80)[];
    max-width: 500px;
    // width: auto;
    // height: auto;
    // width: 100%;
    // align-self: stretch;
    justify-self: stretch;
    grid-column: 2 / 1;
    // height: .height(6)[];
    // border: 6px solid dimgrey;
    // box-shadow: #300 18px 18px 1px 8px;
    transform-style: preserve-3d;
    // transform-style: flat;
    transform: translate3d(0, 0, 0);
    box-shadow: #300 18px 18px 1px 8px;
    // transform-origin: center right;
    // transition: transform 4s;
    // transition:  1s transform;
    transition:
        transform 2s cubic-bezier(0.04, 1, 0.01, 1),
        // box-shadow 2s cubic-bezier(0.04, 1, 0.01, 1);
        box-shadow 2s step-start .02s;
    // transition:
    //     transform linear 5s,
    //     // box-shadow 5s linear;
    //     box-shadow 5s step-start 2.5s;
    font-smoothing: antialiased;
    // -webkit-backface-visibility: hidden;
    // backface-visibility: hidden;
    // -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0) scale(1.0, 1.0);
    align-self: baseline;
    // -webkit-filter: blur(0);
    // filter: blur(0);


    &.card--flipped {
        transform: rotateY(-180deg);
        box-shadow: #300 -18px 18px 1px 8px;
        .contents {
            background-color: black;

            &.card-back {
                background-color: white;
            }
        }
    }

    .contents {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backface-visibility: hidden;
        transition: background-color 2s cubic-bezier(0.08, 1.31, 0, 1.35);

        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        text-align: center;
        max-width: 100%;
        justify-content: flex-start;

        background: linear-gradient(transparent, transparent 60%, dimgrey 60%, dimgrey 100%);
        // z-index: 1;
        // display: grid;
        // grid-template: 1fr 1fr / 1fr;
        // justify-items: center;
        // align-items: center;

        .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            padding-top: .basis(3)[];
            // display: inline-block;
            // height: 100%;
            // width: 100%;

        }

        &.card-back {
            background-color: black;
            transform: rotateY(-180deg);
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
            justify-items: center;
            text-align: center;
        }

        .title {
            // position: absolute;
            // top: 0;
            // left: 0;
            // right: 0;
            // height: 60%;
            // display: flex;
            // align-content: center;
            // justify-content: center;
            // align-items: center;
            // text-align: center;
            // display: block;
            // display: inline-block;
            // height: auto;
            // grid-column: 1 / span 2;
            // .fz(tetra);

            .rmn();
            // line-height: @spacing[lg];
            font-size: calc(@baseline * 10);
            // line-height: calc(1em + .basis(0)[]);
            line-height: 1;
            max-width: 100%;
            padding-top: 0.05em;
            margin-bottom: -0.05em;

            // border: 1px solid #000;

            .above(md, {
                // .fz(giga);
            });

            & + .title {
                margin-bottom: calc(.basis(8)[] - 0.05em);
            }
        }

        .line, .link {
            display: flex;
            // width: 55%;
            justify-content: space-between;
            align-content: center;
            text-decoration: none;
            height: auto;
            height: 1em;
            // border: 1px solid #000;
            font-size: .basis(2)[];
            .rubik(400);

            .below(lg, {
                // width: 63%;
                width: 97%;
            });

            .char {
                display: block;
                text-decoration: none;
            }
        }

        .link {
            border-bottom: 1px solid #000;

            &:hover {
                color: @red;
                border-color: @red;
            }

            &:visited {
                color: @dimred;
                border-color: @dimred;

                &:hover {
                    color: @red;
                    border-color: @red;
                }
            }
        }

        .title, .line, .link {
            // background-color: @blueline;

            // &:nth-child(even) {
            //     background-color: @redline;
            // }
        }

        .test {
            display: block;
            text-align: justify;
            text-justify: inter-character;
            width: 100%;

            display: none;
        }

        .sub {
            background-color: grey;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .fz(xs);
            display: none;

        }

        .link {
            // display: block;

        }
    }
}

</style>