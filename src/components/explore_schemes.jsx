import IconArrowRight from "./icons/right_arrow";

const ExploreSchemes = (props) => {
    return <section>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div
                className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            >
                <div
                    className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl">Find schemes which suits best for you</h2>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                        aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                        Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                        Obcaecati, autem.
                    </p>

                    <div className="mb-4 lg:mb-24 xl:mb-28 mt-12"> {/* Responsive margin */}
                        <a
                            href="#"
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex w-full lg:w-auto items-center justify-center space-x-2 rounded-lg border border-iceland_poppy-500 bg-iceland_poppy-500 px-6 py-3 text-white transition hover:border-iceland_poppy-600 hover:bg-iceland_poppy-700"
                        >
                            <span style={{ fontWeight: "bold" }}>Find Schemes for You</span>
                            <IconArrowRight />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                <path d="M7.8 207.7c-13.1-17.8-9.3-42.8 8.5-55.9L142.9 58.5C166.2 41.3 194.5 32 223.5 32H384 544c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H507.2l-44.9 36c-22.7 18.2-50.9 28-80 28H304 288 224c-17.7 0-32-14.3-32-32s14.3-32 32-32h64 16c8.8 0 16-7.2 16-16s-7.2-16-16-16H183.4L63.7 216.2c-17.8 13.1-42.8 9.3-55.9-8.5zM382.4 160l0 0 .9 0c-.3 0-.6 0-.9 0zM568.2 304.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 453.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 352l0 0-.9 0c.3 0 .6 0 .9 0z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Livelihood</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Skills</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Health</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                                <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Education</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Women and Child</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Scholarship</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>
                    <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-iceland_poppy-500 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant"
                    >
                        <span className="inline-block rounded-lg bg-gray-50 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" /></svg>
                        </span>

                        <h2 className="mt-2 font-bold">Miscellaneous</h2>

                        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default ExploreSchemes