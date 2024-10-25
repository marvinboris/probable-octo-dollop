export default function Donut() {
    return (
        <div className="border border-neutral-200 rounded-xl md:rounded-2xl xl:rounded-3xl p-2.5 md:p-7 bg-white">
            <div>
                <div className="md:text-lg">
                    <span className="font-bold">In high demand</span>
                </div>
                <div className="font-medium text-neutral-500 text-sm md:text-base">
                    Top 5
                </div>
            </div>

            <div>
                <Icon className="w-full" />
            </div>

            <div>
                <div className="flex gap-1 items-center">
                    <div className="size-2 bg-[#E08700] rounded-full" />

                    <div>
                        <div className="text-[10px] md:text-xs font-medium">
                            Legend
                        </div>

                        <div className="text-xs md:text-sm font-bold">
                            Infographie
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Icon(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            width="174"
            height="172"
            viewBox="0 0 174 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_445_2)">
                <path
                    d="M49.8515 145.888C48.5216 147.652 46.0061 148.012 44.3116 146.594C33.3897 137.458 25.1197 125.521 20.4116 112.03C15.2633 97.2779 14.6052 81.3303 18.5205 66.2041C22.4357 51.0779 30.7485 37.4523 42.4076 27.0506C53.0699 17.538 66.0929 11.1123 80.0759 8.42245C82.2453 8.00514 84.2704 9.54003 84.5775 11.7277L86.7592 27.2754C87.0662 29.4631 85.5372 31.4709 83.3774 31.9352C74.0356 33.9433 65.3493 38.344 58.1853 44.7354C50.024 52.0166 44.205 61.5545 41.4643 72.1429C38.7237 82.7312 39.1843 93.8945 42.7881 104.221C45.9515 113.286 51.4119 121.348 58.6062 127.636C60.2695 129.09 60.6324 131.588 59.3026 133.352L49.8515 145.888Z"
                    fill="#E08700"
                />
            </g>
            <path
                d="M95 11C95 8.79086 96.7921 6.98944 98.9984 7.10124C109.721 7.6446 120.235 10.3689 129.892 15.1232C139.55 19.8775 148.121 26.5487 155.09 34.7151C156.525 36.3954 156.19 38.9143 154.439 40.2616L141.996 49.8361C140.246 51.1834 137.745 50.8452 136.274 49.1963C131.543 43.8906 125.825 39.537 119.425 36.3862C113.024 33.2354 106.087 31.3583 98.9966 30.8446C96.7932 30.6849 95 28.9091 95 26.7L95 11Z"
                fill="#0050C7"
            />
            <path
                d="M159.952 48.5C161.865 47.3954 164.321 48.0467 165.328 50.0133C170.218 59.571 173.116 70.0386 173.827 80.7792C174.539 91.5199 173.047 102.278 169.459 112.397C168.721 114.48 166.372 115.449 164.33 114.606L149.817 108.618C147.775 107.776 146.817 105.441 147.51 103.343C149.74 96.5928 150.651 89.4636 150.179 82.3455C149.708 75.2273 147.864 68.2805 144.764 61.8834C143.801 59.8954 144.442 57.4546 146.355 56.35L159.952 48.5Z"
                fill="#089C20"
            />
            <path
                d="M99.2984 160.877C99.425 163.082 97.739 164.983 95.5299 164.998C82.8288 165.084 70.2926 162.104 58.9878 156.314C57.0215 155.307 56.371 152.851 57.4763 150.938L65.3313 137.344C66.4365 135.432 68.8776 134.791 70.8653 135.755C78.1355 139.282 86.0915 141.173 94.171 141.294C96.3799 141.327 98.2719 142.997 98.3986 145.203L99.2984 160.877Z"
                fill="#6110C8"
            />
            <path
                d="M161.694 120.306C163.658 121.317 164.441 123.735 163.332 125.645C157.944 134.932 150.712 143.035 142.067 149.448C133.422 155.862 123.569 160.432 113.119 162.894C110.968 163.401 108.882 161.951 108.484 159.778L105.662 144.334C105.265 142.161 106.709 140.091 108.848 139.538C115.73 137.758 122.217 134.664 127.947 130.414C133.676 126.164 138.519 120.853 142.219 114.783C143.369 112.897 145.768 112.114 147.733 113.125L161.694 120.306Z"
                fill="#C8107E"
            />
            <defs>
                <filter
                    id="filter0_d_445_2"
                    x="3.05176e-05"
                    y="0.35387"
                    width="102.798"
                    height="171.114"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.879167 0 0 0 0 0.5275 0 0 0 0 0 0 0 0 0.17 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_445_2"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_445_2"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
