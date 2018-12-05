<template>
    <div class="layout">
        <div class="tester">

        ABCDEFG
        </div>

        <div class="card" :class="{'card--flipped': flipped}">
            <div class="contents">
                <div class="column">
                    <div class="half">

                        <div class="title">Jacob</div>
                        <div class="title">Smith</div>
                    </div>
                <!-- <br>  -->
                    <div class="half">
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
                            <span class="char visible-micro">m</span>
                            <span class="char visible-micro">y</span>
                            <span class="char visible-micro"> </span>
                            <span class="char visible-micro"> </span>
                            <span class="char">g</span>
                            <span class="char">i</span>
                            <span class="char">t</span>
                            <span class="char">h</span>
                            <span class="char">u</span>
                            <span class="char">b</span>
                            <span class="char hidden-micro">.</span>
                            <span class="char hidden-micro">c</span>
                            <span class="char hidden-micro">o</span>
                            <span class="char hidden-micro">m</span>
                            <span class="char hidden-micro">/</span>
                            <span class="char hidden-micro">l</span>
                            <span class="char hidden-micro">i</span>
                            <span class="char hidden-micro">m</span>
                            <span class="char hidden-micro">e</span>
                            <span class="char hidden-micro">a</span>
                            <span class="char hidden-micro">n</span>
                            <span class="char hidden-micro">d</span>
                            <span class="char hidden-micro">c</span>
                            <span class="char hidden-micro">o</span>
                            <span class="char hidden-micro">c</span>
                            <span class="char hidden-micro">o</span>
                            <span class="char hidden-micro">n</span>
                            <span class="char hidden-micro">u</span>
                            <span class="char hidden-micro">t</span>
                        </a>
                    </div>
                </div>
                <!-- <div class="sub"> -->

                    <!-- <div class="test">foo</div> -->
                <!-- </div> -->
                <!-- <div class="sub">
                </div> -->
            </div>
            <div class="contents card-back">
                "Hey! If you're a good developer why isn't this very fancy?"
                <br>
                <br>
                It's a minimalist thing. All the fancy is in the quality of execution.
            </div>
        </div>

        <div class="tag" @click="flip">
            Flip it.
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
    border: 1px solid #000;
    align-self: baseline;
    font-size: 60px;
    padding-top: unit((1.2 - @cap-height) / 2, em);
    line-height: 1.2em;
    display: none;
}

.layout {
    background-color: @red;
    display: grid;
    // grid-template: auto / 1fr .basis(80)[] 1fr;
    grid-template: auto / 1fr 10fr 1fr;
    align-items: center;
    justify-items: center;
    justify-content: center;
    height: 100vh;
    .rubik(500);
    font-size: .basis(2)[];
    perspective: 60em;

    .above(md; {
        grid-template: auto / 1fr .basis(80)[] 1fr;
    });

    .above(lg; {
        grid-template: auto / 1fr .basis(60)[] 1fr;
    });

}

.tag {
    background-color: white;
    // grid-column: 3 / 1;
    grid-column: 2 / 1;
    min-width: 30%;
    text-align: center;
    // position: relative;
    // top: 20%;
    height: 3em;
    box-shadow: #422 1px 1px 1px 0px;
    cursor: pointer;

    position: fixed;
        top: auto;
        bottom: .basis(3)[];
        display: flex;
        justify-content: center;
        align-items: center;

    .above(lg; {
        position: relative;
        top: 20%;
        bottom: auto;
        grid-column: 3 / 1;
    });

    .above(md; {
        // grid-column: 2;
        // position: fixed;
        // top: auto;
        // bottom: .basis(3)[];
    });
}

.card {
    .ratio(7, 4, true);
    background-color: white;
    position: relative;
    top: -9px;
    justify-self: stretch;
    grid-column: 2 / 1;
    transform-style: preserve-3d;
    // transform-style: flat;
    transform: translate3d(0, 0, 0);
    box-shadow: #300 18px 18px 1px 8px;
    transform-origin: center right;
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
    // align-self: baseline;
    // -webkit-filter: blur(0);
    // filter: blur(0); .

    .above(lg; {
        // grid-column: 2 / 1;
    });

    &.card--flipped {
        transform: translateX(-100%) rotateY(-180deg);
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
        left: -1px;
        right: -1px;
        backface-visibility: hidden;
        transition: background-color 2s cubic-bezier(0.08, 1.31, 0, 1.35);

        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: stretch;
        justify-items: center;
        text-align: center;
        // max-width: 100%;
        // background: linear-gradient(transparent, transparent 60%, dimgrey 60%, dimgrey 100%);
        // background-size: 105%;

        &:not(.card-back)::before {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            background-color: dimgrey;
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
            line-height: 1.2;
        }

        .column {
            position: relative;
            max-width: 100%;
            height: 100%;
        }

        .title {

            .rmn();
            font-size: calc(@baseline * 6);
            line-height: 1;
            max-width: 100%;

            .above(260px; {
                font-size: calc(@baseline * 7)
            });

            .above(360px; {
                font-size: calc(@baseline * 8)
            });

            .above(480px; {
                font-size: calc(@baseline * 10)
            });

            .above(560px; {
                font-size: calc(@baseline * 12)
            });

            .above(md, {
                font-size: calc(@baseline * 10);
                // .fz(giga);
            });

            .above(lg, {
                font-size: calc(@baseline * 8);
                // .fz(giga);
            });

        }

        .half {
            height: 60%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & + .half {
                position: absolute;
                top: auto;
                bottom: 0;
                height: 40%;
            }
        }

        .line, .link {
            display: flex;
            justify-content: space-between;
            align-content: center;
            text-decoration: none;
            height: auto;
            height: 1.2em;
            font-size: .basis(2)[];
            .rubik(400);

            // .below(lg, {
                width: 98%;

            .above(260px; {
                font-size: .basis(2)[];
                height: 1em;
            });


            // });
            .above(320px; {
                font-size: .basis(2)[];
                height: 1.2em;
                .rubik(500);
            });

            .above(560px; {
                font-size: .basis(3)[];
                height: 1em;
            });

            .above(lg; {
                font-size: .basis(2)[];
            });


            .char {
                display: block;
                text-decoration: none;

                &.visible-micro {
                    .above(260px; {
                        display: none;
                    });
                }

                &.hidden-micro {
                    display: none;

                    .above(260px; {
                        display: inline;
                    });
                }
            }
        }

        .link {
            position: relative;
            // border-bottom: 1px solid #000;
            &::before {
                content: ' ';
                position: absolute;
                bottom: -0.05em;
                left: 0;
                right: 0;
                width: 100%;
                height: 1px;
                background-color: black;

                .above(260px; {
                    bottom: -0.2em;
                });

                .above(320px; {
                    bottom: 0.05em;
                });

                .above(560px; {
                    bottom: 0.15em;
                });

                .above(md; {
                    height: 2px;
                });

                .above(lg; {
                    bottom: 0.05em;
                });

                .above(xl; {
                    bottom: 0.25em;
                });
            }

            &:hover {
                color: @red;

                &::before {
                    background-color: @red;
                }
                // border-color: @red;
            }

            &:visited {
                color: @dimred;
                // border-color: @dimred;

                &::before {
                    background-color: @dimred;
                }

                &:hover {
                    color: @red;
                    // border-color: @red;

                    &::before {
                        background-color: @red;
                    }
                }
            }
        }

        .line {
            display: none;

            .above(260px; {
                display: flex;
            });
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

        // .link {
        //     // display: block;

        // }
    }
}

</style>