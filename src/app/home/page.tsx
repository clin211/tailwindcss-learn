import React from "react";
import styles from "@/assets/styles/home.module.css";

const Home = () => {
    return (
        <div className={styles['root']}>
            <header className={styles["site-header"]}>
                <h1 className={styles["sr-only"]}>Scrollnapping animations</h1>

                {/* <!-- Because Chrome crashes if an overflow is set on the fieldset while a named timeline is on a child element -->
            <!-- ¯\_(ツ)_/¯ --> */}
                <div className={styles["fieldset-wrapper"]}>
                    <fieldset>
                        <legend className={styles["sr-only"]}>Effects</legend>

                        {/* <!-- radio buttons for each of the @keyframes above --> */}
                        <input
                            type="radio"
                            id="blink-effect"
                            name="effect"
                            value="blink"
                            checked
                            className={styles["sr-only"]}
                        />
                        <label htmlFor="blink-effect">Blink</label>

                        <input
                            type="radio"
                            id="horizontal-scroll-effect"
                            name="effect"
                            value="horizontal-scroll"
                            className={styles["sr-only"]}
                        />
                        <label htmlFor="horizontal-scroll-effect">
                            Horizontal scroll
                        </label>

                        <input
                            type="radio"
                            id="backwards-scroll-effect"
                            name="effect"
                            value="backwards-scroll"
                            className={styles["sr-only"]}
                        />
                        <label htmlFor="backwards-scroll-effect">
                            Backwards scroll
                        </label>

                        <input
                            type="radio"
                            id="zoom-scroll-effect"
                            name="effect"
                            value="zoom-scroll"
                            className={styles["sr-only"]}
                        />
                        <label htmlFor="zoom-scroll-effect">Zoom scroll</label>
                    </fieldset>
                </div>

                <nav>
                    <ul className={styles["indicator"]}>
                        <li>
                            <a href="#snapping">
                                <span className={styles["sr-only"]}>
                                    Snapping
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#scrolling">
                                <span className={styles["sr-only"]}>
                                    Scrolling
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#layout">
                                <span className={styles["sr-only"]}>
                                    Layout
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#transition">
                                <span className={styles["sr-only"]}>
                                    Transition
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#caveats">
                                <span className={styles["sr-only"]}>
                                    Caveats
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='main'>
                <section id="snapping" className={styles["section"]}>
                    <div className={styles["content"]}>
                        <h2>
                            <strong>First</strong>, we set up the{" "}
                            <em>snapping</em> points
                        </h2>

                        <div className={styles["text"]}>
                            <img
                                src="https://assets.codepen.io/197359/flower-white.png"
                                alt=""
                            />
                            <p>
                                We set the scrolling element, in this case our{" "}
                                <code className={styles["selector"]}>HTML</code>{" "}
                                element, to forcibly snap to the Y axis by using{" "}
                                <code className={styles["property"]}>
                                    scroll-snap-type: y mandatory
                                </code>
                                .
                            </p>

                            <p>
                                And then we set{" "}
                                <code className={styles["selector"]}>
                                    section
                                </code>{" "}
                                as the snapping elements by using{" "}
                                <code className={styles["property"]}>
                                    scroll-snap-align: start
                                </code>
                                .
                            </p>
                        </div>
                    </div>
                </section>
                <section id="scrolling" className={styles["section"]}>
                    <div className={styles["content"]}>
                        <h2>
                            <strong>Next</strong>, we set up the{" "}
                            <em>scrolling</em> animation
                        </h2>

                        <div className={styles["text"]}>
                            <img
                                src="https://assets.codepen.io/197359/flower-yellow.png"
                                alt=""
                            />
                            <p>
                                We track the{" "}
                                <code className={styles["property"]}>
                                    view()
                                </code>{" "}
                                position of the{" "}
                                <code className={styles["selector"]}>
                                    section
                                </code>{" "}
                                elements using the named timeline{" "}
                                <code className={styles["property"]}>
                                    view-timeline: --section;
                                </code>
                                . We had previously set the{" "}
                                <code className={styles["property"]}>
                                    timeline-scope: --section
                                </code>{" "}
                                up in our{" "}
                                <code className={styles["selector"]}>HTML</code>{" "}
                                element, so we can access it from anywhere in
                                the document.
                            </p>

                            <p>
                                We animate the{" "}
                                <code className={styles["selector"]}>
                                    .content
                                </code>{" "}
                                children using{" "}
                                <code className={styles["property"]}>
                                    animation-timeline: --section;
                                </code>
                                . The{" "}
                                <code className={styles["selector"]}>
                                    .content
                                </code>{" "}
                                element will now animate based on its parent{" "}
                                <code className={styles["selector"]}>
                                    section
                                </code>
                                &apos;s position. This is important due to how
                                we&apos;re handling the layout in the next
                                section.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="layout" className={styles["section"]}>
                    <div className={styles["content"]}>
                        <h2>
                            <strong>Then</strong>, we position a <em>fixed</em>{" "}
                            layout
                        </h2>

                        <div className={styles["text"]}>
                            <img
                                src="https://assets.codepen.io/197359/flower-blue.png"
                                alt=""
                            />
                            <p>
                                We set the{" "}
                                <code className={styles["selector"]}>
                                    .content
                                </code>{" "}
                                elements to{" "}
                                <code className={styles["property"]}>
                                    position: fixed
                                </code>
                                , so they&apos;re removed from the normal
                                document flow and stack on top of each other,
                                giving them a solid background, so only one is
                                visible at a time.
                            </p>

                            <p>
                                Their parent{" "}
                                <code className={styles["selector"]}>
                                    section
                                </code>
                                s are positioned as normal in the layer below,
                                taking up space, scroll-snapping, and powering
                                the{" "}
                                <code className={styles["property"]}>
                                    animation-timeline
                                </code>
                                .
                            </p>
                        </div>
                    </div>
                </section>
                <section id="transition" className={styles["section"]}>
                    <div className={styles["content"]}>
                        <h2>
                            <strong>Finally</strong>, we create the{" "}
                            <em>transition</em> effects
                        </h2>

                        <div className={styles["text"]}>
                            <img
                                src="https://assets.codepen.io/197359/flower-red.png"
                                alt=""
                            />
                            <p>
                                By setting the{" "}
                                <code className={styles["selector"]}>
                                    .content
                                </code>{" "}
                                elements to{" "}
                                <code className={styles["property"]}>
                                    position: fixed
                                </code>
                                , we can now transition between them without a
                                visible scrolling movement.
                            </p>

                            <p>
                                We create a normal{" "}
                                <code className={styles["selector"]}>
                                    @keyframe
                                </code>{" "}
                                animation to our liking to transition between
                                them. Check the navigation menu to see different
                                effects.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="caveats" className={styles["section"]}>
                    <div className={styles["content"]}>
                        <h2>
                            <strong>Caveats</strong>
                        </h2>

                        <div className={styles["text"]}>
                            <img
                                src="https://assets.codepen.io/197359/flower-purple.png"
                                alt=""
                            />
                            <ul>
                                <li>
                                    Scrolling animations are not currently
                                    available in Firefox. This demo is using a
                                    polyfill.
                                </li>
                                <li>
                                    This layout is fragile due to the use of{" "}
                                    <code className={styles["property"]}>
                                        position: fixed
                                    </code>
                                    . You need to carefully manage stacking
                                    contexts.
                                </li>
                                <li>
                                    Snapping points have their own caveats, such
                                    as content taller than the viewport becoming
                                    inaccessible, along with the general
                                    annoyance of scrolljacking.
                                </li>
                                <li>
                                    The{" "}
                                    <code className={styles["selector"]}>
                                        blink
                                    </code>{" "}
                                    effect uses the{" "}
                                    <code className={styles["property"]}>
                                        contrast()
                                    </code>{" "}
                                    filter, which modifies the colors of the
                                    entire section. Thus, the background is set
                                    to black (or white), ensuring that it
                                    appears unchanged during transitions due to
                                    already being at maximum contrast.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>
                    That&apos;s it <span className={styles["emoji"]}>🌸</span>
                </p>
            </footer>
        </div>
    );
};

export default Home;
