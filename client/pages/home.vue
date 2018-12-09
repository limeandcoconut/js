<template>
    <div class="layout">
        <!-- <div class="logo">JS</div> -->

        <div class="card" :class="{'card--flipped': flipped}">
            <div class="contents">
                <div class="column">
                    <div class="half">
                        <div class="title">Jacob</div>
                        <div class="title">Smith</div>
                    </div>
                    <div class="half">
                        <div class="line">
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

                                <!-- <span class="char">W</span>
                                <span class="char">e</span>
                                <span class="char">b</span> -->
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
                        <a href="https://github.com/limeandcoconut" target="_blank" class="link">
                            <span class="aria-visible">github.com/limeandcoconut</span>
                            <span class="aria-hidden" aria-hidden="true">
                                <span class="char visible-micro">m</span>
                                <span class="char visible-micro">y</span>
                                <span class="char visible-micro">&nbsp;&nbsp;</span>
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
            Flip it.
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
        grid-template: auto / 1fr .basis(60)[] 1fr;
    });

    // :not(.logo) {
    //     display: none;
    // }

    .logo {
        display: none;
        // .ratio(1, 1, pse);
        width: 60vw;
        height: 60vw;
        border: 2px solid dimgrey;
        // .rmn();
        // line-height: 1rem;
        font-size: .basis(63)[];
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        line-height: 0.78em;
        font-weight: 600;
        padding: 0 90px 60px 0;
        letter-spacing: -0.06em;
    }

}

.tag {
    background-color: white;
    grid-column: 2 / 1;
    position: fixed;
    top: auto;
    bottom: .basis(3)[];
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    min-width: 30%;
    box-shadow: #422 1px 1px 1px 0px;
    text-align: center;
    cursor: pointer;

    .above(lg; {
        grid-column: 3 / 1;
        position: relative;
        // top: 20%;
        margin-top: 20%;
        bottom: auto;
    })
}

.card {
    .ratio(7, 4, true);
    background-color: white;
    grid-column: 2 / 1;
    justify-self: stretch;
    position: relative;
    top: -9px;
    box-shadow: #300 18px 18px 1px 8px;
    transform-style: preserve-3d;
    transform-origin: center right;
    transform: translate3d(0, 0, 0) scale(1.0, 1.0);
    transition:
        transform 2s cubic-bezier(0.04, 1, 0.01, 1),
        box-shadow 2s step-start .02s;

    font-smoothing: antialiased;

    &.card--flipped {
        box-shadow: #300 -18px 18px 1px 8px;
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
        // overflow: hidden;

        &:not(.backface)::before {
            content: ' ';
            background-color: dimgrey;
            position: absolute;
            bottom: -2px;
            left: 0px;
            right: 0px;
            height: calc(40% + 2px);
            backface-visibility: hidden;
        }

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
                font-size: .basis(8)[];
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
            // display: flex;
            // justify-content: space-between;
            // align-content: center;
            height: 1.2em;
            width: 98%;
            .rubik(400);
            text-decoration: none;
            font-size: .basis(2)[];

            .aria-hidden {
                width: 1px;
                display: flex;
                justify-content: space-between;
                align-content: center;
                height: 100%;
                width: 100%;
                // width: 98%;
                // .rubik(400);
                font-size: .basis(2)[];
                text-decoration: none;
            }

            .aria-visible {
                .aria-visible();
            }

            .above(260px; {
                height: 1em;
                font-size: .basis(2)[];
            });

            .above(320px; {
                height: 1.2em;
                .rubik(500);
                font-size: .basis(2)[];
            });

            .above(560px; {
                height: 1em;
                font-size: .basis(3)[];
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
                        display: block;
                    });
                }
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