<template>
    <div class="layout">
        <!-- <div class="logo">JS</div> -->

        <div class="card" :class="{'card--flipped': flipped}">
            <div class="contents">
                <div class="column">
                    <h1 class="half">
                        <span class="title">Jacob</span>
                        <span class="title">Smith</span>
                    </h1>
                    <div class="half">
                        <div class="line hidden-small">
                            <h2 class="aria-visible">Javascript Fungineer (Engineer)</h2>
                            <span class="aria-hidden" aria-hidden="true">
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
                                <span class="char">&nbsp;&nbsp;</span>
                                <span class="char">F</span>
                                <span class="char">u</span>
                                <span class="char">n</span>
                                <span class="char">g</span>
                                <span class="char">i</span>
                                <span class="char">n</span>
                                <span class="char">e</span>
                                <span class="char">e</span>
                                <span class="char">r</span>
                            </span>
                        </div>
                        <div class="line">
                            <h2 class="aria-visible">Full Stack Web Developer</h2>
                            <span class="aria-hidden" aria-hidden="true">
                                <span class="char">F</span>
                                <span class="char">u</span>
                                <span class="char">l</span>
                                <span class="char">l</span>
                                <span class="char">&nbsp;&nbsp;</span>
                                <span class="char">S</span>
                                <span class="char">t</span>
                                <span class="char">a</span>
                                <span class="char">c</span>
                                <span class="char">k</span>
                                <span class="char">&nbsp;&nbsp;</span>
                                <span class="char">D</span>
                                <span class="char">e</span>
                                <span class="char">v</span>
                                <span class="char">e</span>
                                <span class="char">l</span>
                                <span class="char">o</span>
                                <span class="char">p</span>
                                <span class="char">e</span>
                                <span class="char">r</span>
                            </span>
                        </div>
                        <a href="mailto:js@jacobsmith.tech" class="link">
                            <span class="aria-visible">js@jacobsmith.tech</span>
                            <span class="aria-hidden" aria-hidden="true">
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
                            </span>
                        </a>
                        <a rel="noopener noreferrer" href="https://github.com/limeandcoconut" target="_blank" class="link">
                            <span class="aria-visible">github.com/limeandcoconut</span>
                            <span class="aria-hidden" aria-hidden="true">
                                <!-- <span class="char visible-small">m</span>
                                <span class="char visible-small">y</span> -->
                                <span class="char visible-small">P</span>
                                <span class="char visible-small">e</span>
                                <span class="char visible-small">r</span>
                                <span class="char visible-small">s</span>
                                <span class="char visible-small">o</span>
                                <span class="char visible-small">n</span>
                                <span class="char visible-small">a</span>
                                <span class="char visible-small">l</span>
                                <span class="char visible-small">&nbsp;&nbsp;</span>
                                <span class="char visible-small">G</span>
                                <span class="char hidden-small">g</span>
                                <span class="char">i</span>
                                <span class="char">t</span>
                                <span class="char">h</span>
                                <span class="char">u</span>
                                <span class="char">b</span>
                                <span class="char hidden-small">.</span>
                                <span class="char hidden-small">c</span>
                                <span class="char hidden-small">o</span>
                                <span class="char hidden-small">m</span>
                                <span class="char hidden-small">/</span>
                                <span class="char hidden-small">l</span>
                                <span class="char hidden-small">i</span>
                                <span class="char hidden-small">m</span>
                                <span class="char hidden-small">e</span>
                                <span class="char hidden-small">a</span>
                                <span class="char hidden-small">n</span>
                                <span class="char hidden-small">d</span>
                                <span class="char hidden-small">c</span>
                                <span class="char hidden-small">o</span>
                                <span class="char hidden-small">c</span>
                                <span class="char hidden-small">o</span>
                                <span class="char hidden-small">n</span>
                                <span class="char hidden-small">u</span>
                                <span class="char hidden-small">t</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="contents backface">
                "Hey! If you're a good developer why isn't this very fancy?"
                <br>
                <br>
                It's a minimalist thing. All the fancy is in the quality of execution.
            </div>
        </div>

        <div class="tag" @click="flip">
            FLIP
        </div>
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
            card: '/images/logo.png',
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

.layout {
    background-color: @red;
    display: grid;
    grid-template: auto / 1fr 10fr 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    height: 100vh;
    perspective: 60em;
    font-size: .basis(2)[];
    .rubik(500);

    .above(md; {
        grid-template: auto / 1fr .basis(80)[] 1fr;
    });

    .above(lg; {
        grid-template: auto / 1fr .basis(70)[] 1fr;
    });

    @supports not (display:grid) {
        display: flex;
        flex-direction: column;
    }

    // // :not(.logo) {
    //     //     display: none;
    // // }

    // .logo {
    //     display: none;
    //     // .ratio(1, 1, pse);
    //     width: 60vw;
    //     height: 60vw;
    //     border: 2px solid dimgrey;
    //     // .rmn();
    //     font-size: .basis(63)[];
    //     display: flex;
    //     align-items: flex-end;
    //     justify-content: flex-end;
    //     line-height: 0.78em;
    //     font-weight: 600;
    //     padding: 0 90px 60px 0;
    //     letter-spacing: -0.06em;
    // }

}

.tag {
    background-color: @red;
    position: fixed;
    top: auto;
    left: calc(50vw - 15%);
    bottom: .basis(3)[];
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    min-width: 30%;
    // box-shadow: @lessdimgred 1px 1px 1px 0px;
    // box-shadow: @lessdimgred 20px 20px 40px -10px;
    box-shadow: @lessdimgred 1px 4px 2px 0px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: @min-base * 2px;

    .above(480px; {
        font-size: .basis(2)[];
    });

    .above(lg; {
        grid-column: 3 / 1;
        position: relative;
        margin-top: 20%;
        bottom: auto;
        left: auto;
    })
}

.card {
    .ratio(7, 4);
    background: linear-gradient(white 0%, white 60%, dimgrey 60%, dimgrey 100%);
    grid-column: 2 / 1;
    justify-self: stretch;
    position: relative;
    top: -9px;
    box-shadow: @dimgred 18px 18px 1px 8px;
    transform-style: preserve-3d;
    transform-origin: center right;
    transform: translateZ(0) scale(.999, .999);
    transition:
        transform 2s cubic-bezier(0.04, 1, 0.01, 1);
    font-smoothing: antialiased !important;


    @supports not (display:grid) {
        width: 90%;
    }

    &.card--flipped {
        box-shadow: @dimgred -18px 18px 1px 8px;
        transform: translateX(-100%) rotateY(-180deg);

        .contents {
            background-color: black;
            &.backface {
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
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: stretch;
        justify-items: center;
        backface-visibility: hidden;
        transition: background-color 2s cubic-bezier(0.08, 1.31, 0, 1.35);
        text-align: center;

        &.backface {
            background-color: black;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            justify-content: center;
            justify-items: center;
            transform: rotateY(-180deg) translateZ(.0001em);
            line-height: 1.2;
            text-align: center;
            padding: 1em;
        }

        .column {
            position: relative;
            max-width: 100%;
            height: 100%;
        }

        .title {

            .rmn();
            max-width: 100%;
            font-size: .basis(6)[];
            line-height: 1;

            .above(260px; {
                font-size: .basis(7)[];
            });

            .above(360px; {
                font-size: .basis(8)[];
            });

            .above(480px; {
                font-size: .basis(10)[];
            });

            .above(560px; {
                font-size: .basis(12)[];
            });

            .above(md, {
                font-size: .basis(10)[];
            });

            .above(lg, {
                font-size: .basis(9)[];
            });

        }

        .half {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 60%;
            width: 100%;

            & + .half {
                position: absolute;
                top: auto;
                bottom: 0;
                height: 40%;
            }
        }

        .line, .link {
            height: 1.2em;
            width: 98%;
            .rubik(400);
            text-decoration: none;
            // font-size: .basis(2)[];
            font-size: @min-base * 2px;

            .aria-hidden {
                width: 1px;
                display: flex;
                justify-content: space-between;
                align-content: center;
                height: 100%;
                width: 100%;
                // font-size: .basis(2)[];
                // font-size: @min-base * 2px;
                text-decoration: none;
                // color: green;
            }

            .aria-visible {
                .aria-visible();
            }

            .above(260px; {
                height: 1em;
                // font-size: .basis(2)[];
            });

            .above(320px; {
                height: 1.2em;
                .rubik(500);
                // font-size: .basis(2)[];
            });

            .above(480px; {
                font-size: .basis(2)[];
            });

            .above(560px; {
                height: 1em;
                font-size: .basis(3)[];
            });

            .above(md; {
                height: 1.2em;
                font-size: .basis(3)[];
            });

            .above(lg; {
                height: 1.2em;
                font-size: .basis(2)[];
            });


            .char {
                display: block;
                text-decoration: none;

                &.visible-small {
                    .above(360px; {
                        display: none;
                    });
                }

                &.hidden-small {
                    display: none;

                    .above(360px; {
                        display: block;
                    });
                }
            }


            &.hidden-small {
                display: none;

                .above(360px; {
                    display: block;
                });
            }
        }

        .link {
            position: relative;

            &::before {
                content: ' ';
                background-color: black;
                position: absolute;
                bottom: -0.05em;
                left: 0;
                right: 0;
                width: 100%;
                height: 1px;

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
                    bottom: 0.25em;
                    // height: 2px;
                    // bottom: ;
                });

                // .above(lg; {
                //     bottom: 0.05em;
                // });

                .above(xl; {
                    // bottom: 0.25em;
                    height: 2px;
                });
            }

            &:hover {
                color: @red;

                &::before {
                    background-color: @red;
                }
            }

            &:visited {
                color: @dimred;

                &::before {
                    background-color: @dimred;
                }

                &:hover {
                    color: @red;

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
        }
    }
}

</style>