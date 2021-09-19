<script>
    export let light = false,
        dark = false,
        lighten = false,
        darken = false,
        primary = false,
        success = false,
        warning = false,
        error = false,
        link = false,
        action = false,
        block = false,
        sm = false,
        lg = false,
        clear = false,
        solid = false,
        badge = false,
        tooltip = false,
        loading = false,
        bgPrimary = false;
</script>

<button
    class="btn"
    class:btn-light={light}
    class:btn-dark={dark}
    class:btn-lighten={lighten}
    class:btn-darken={darken}
    class:btn-primary={primary}
    class:btn-success={success}
    class:btn-warning={warning}
    class:btn-error={error}
    class:btn-link={link}
    class:btn-action={action}
    class:btn-block={block}
    class:btn-sm={sm}
    class:btn-lg={lg}
    class:btn-clear={clear}
    class:btn-solid={solid}
    class:bg-primary={bgPrimary}
    class:badge
    class:tooltip
    class:loading
    data-badge={badge ? (badge === true ? "" : badge) : null}
    data-tooltip={tooltip ? tooltip : null}
    on:click
    {...$$restProps}
>
    <slot />
</button>

<style lang="scss" global>
    @import "buttons.scss";

    // return css color variable with different opacity value
    @function alpha($color, $opacity) {
        $color: str-replace($color, "var(");
        $color: str-replace($color, ")");
        $color-h: var(#{$color + "-h"});
        $color-s: var(#{$color + "-s"});
        $color-l: var(#{$color + "-l"});
        @return hsla($color-h, $color-s, $color-l, $opacity);
    }

    @function lighter($color, $lightnessMultiplier) {
        $color: str-replace($color, "var(");
        $color: str-replace($color, ")");
        $color-h: var(#{$color + "-h"});
        $color-s: var(#{$color + "-s"});
        $color-l: var(#{$color + "-l"});
        @return hsl(
            $color-h,
            $color-s,
            calc(#{$color-l} * #{$lightnessMultiplier})
        );
    }

    @function saturation($color, $saturationMultiplier) {
        $color: str-replace($color, "var(");
        $color: str-replace($color, ")");
        $color-h: var(#{$color + "-h"});
        $color-s: var(#{$color + "-s"});
        $color-l: var(#{$color + "-l"});
        @return hsl(
            $color-h,
            calc(#{$color-s} * #{$saturationMultiplier}),
            $color-l
        );
    }

    @function hsls($color) {
        $color: str-replace($color, "var(");
        $color: str-replace($color, ")");
        $color-h: #{var(#{$color + "-h"})};
        $color-s: #{var(#{$color + "-s"})};
        $color-l: #{var(#{$color + "-l"})};
        @return #{$color-l};
        // @return hsl($color-h, $color-s, $color-l);
    }

    @function cssvar($color) {
        $color: str-replace($color, "var(");
        $color: str-replace($color, ")");
        $color-h: #{var(#{$color + "-h"})};
        $color-s: #{var(#{$color + "-s"})};
        $color-l: #{var(#{$color + "-l"})};
        // @return #{$color-l};
        @return hsl(#{$color-h}, #{$color-s}, #{$color-l});
    }

    // replace substring with another string
    // credits: https://css-tricks.com/snippets/sass/str-replace-function/
    @function str-replace($string, $search, $replace: "") {
        $index: str-index($string, $search);
        @if $index {
            @return str-slice($string, 1, $index - 1) + $replace +
                str-replace(
                    str-slice($string, $index + str-length($search)),
                    $search,
                    $replace
                );
        }
        @return $string;
    }

    @mixin defineColorHSL($color, $hue, $saturation, $lightness) {
        #{$color}: unquote("hsl(#{$hue}, #{$saturation}, #{$lightness})");
        #{$color}-h: #{$hue};
        #{$color}-s: #{$saturation};
        #{$color}-l: #{$lightness};
        #{$color}-hsl: #{$hue}, #{$saturation}, #{$lightness};
    }

    :root {
        @include defineColorHSL(--color-primary, 220, 89%, 56%);
        --color: hsl(220, 89%, 56%);
    }

    @mixin bg-color-variant($name: ".bg-primary", $color) {
        #{$name} {
            background: $color !important;

            // @if (lightness(#{$color}) < 60%) {
            //     color: $light-color;
            // }
        }
    }
    @include bg-color-variant(".bg-primary", var(--color-primary));

    button {
        color: lighter(var(--color-primary), 0.8);
    }
    .bg-primary {
        color: hsls(var(--color-primary)) !important;
        background-color: lighter(var(--color-primary), 0.8) !important;
    }
    // @import "../../scss/_variables";
    // @import "../../scss/_mixins";

    // .btn {
    //     --a: 0;
    //     appearance: none;
    //     background: hsla(
    //         var(--h),
    //         calc(var(--s) * 1%),
    //         calc(var(--l) * 1%),
    //         calc(var(--a) * 1%)
    //     );
    //     border: $border-width solid
    //         hsla(
    //             var(--h),
    //             calc(var(--s) * 1%),
    //             calc(var(--l) * 1%),
    //             calc((var(--a) + 100) * 1%)
    //         );
    //     border-radius: $border-radius;
    //     color: hsla(
    //         var(--h),
    //         calc(var(--s) * 1%),
    //         calc(var(--l) * 1%),
    //         calc((var(--a) + 100) * 1%)
    //     );
    //     cursor: pointer;
    //     display: inline-block;
    //     font-size: $font-size;
    //     height: $control-size;
    //     line-height: $line-height;
    //     outline: none;
    //     padding: $control-padding-y $control-padding-x;
    //     text-align: center;
    //     text-decoration: none;
    //     transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
    //     user-select: none;
    //     vertical-align: middle;
    //     white-space: nowrap;
    //     &:hover {
    //         --l: calc(var(--light) - 5);
    //         --a: 15;
    //         text-decoration: none;
    //     }
    //     &:active,
    //     &.active {
    //         --l: calc(var(--light) - 10);
    //         --a: 100;
    //         color: var(--light-color);
    //         text-decoration: none;
    //         box-shadow: 0 0 0 0.1rem
    //             hsla(var(--h), calc(var(--s) * 1%), calc(var(--l) * 1%), 20%);
    //     }
    //     &.loading {
    //         &::after {
    //             border-bottom-color: hsla(
    //                 var(--h),
    //                 calc(var(--s) * 1%),
    //                 calc(var(--l) * 1%),
    //                 100%
    //             );
    //             border-left-color: hsla(
    //                 var(--h),
    //                 calc(var(--s) * 1%),
    //                 calc(var(--l) * 1%),
    //                 100%
    //             );
    //         }
    //     }
    //     &[disabled],
    //     &:disabled,
    //     &.disabled {
    //         cursor: default;
    //         opacity: 0.5;
    //         pointer-events: none;
    //     }

    //     &.btn-solid {
    //         --a: 100;
    //         // color: var(--light-color);
    //         color: hsla(var(--h), 7.5%, 95%, calc(var(--a) * 1%));
    //         &.loading {
    //             &::after {
    //                 border-bottom-color: var(--light-color);
    //                 border-left-color: var(--light-color);
    //             }
    //         }
    //     }

    //     &:not(.btn-primary) {
    //         --s: 10;
    //     }

    //     &.btn-success {
    //         --h: 120;
    //         --s: 60;
    //     }

    //     &.btn-warning {
    //         --h: 40;
    //         --s: 90;
    //     }

    //     &.btn-error {
    //         --h: 15;
    //         --s: 90;
    //     }

    //     &.btn-dark {
    //         --l: 25;
    //         &:hover {
    //             --l: 20;
    //         }
    //         &:active,
    //         &.active {
    //             --l: 15;
    //         }
    //     }

    //     &.btn-light {
    //         --l: 85;
    //         &:hover {
    //             --l: 80;
    //         }
    //         &:active,
    //         &.active {
    //             --l: 75;
    //         }
    //     }
    //     &.btn-darken {
    //         --l: calc(var(--light) - 10);
    //         &:hover {
    //             --l: calc(var(--light) - 15);
    //         }
    //         &:active,
    //         &.active {
    //             --l: calc(var(--light) - 20);
    //         }
    //     }

    //     &.btn-lighten {
    //         --l: calc(var(--light) + 10);
    //         &:hover {
    //             --l: calc(var(--light) + 15);
    //         }
    //         &:active,
    //         &.active {
    //             --l: calc(var(--light) + 20);
    //         }
    //     }

    //     &.btn-primary-light {
    //         --l: 100;
    //         color: var(--primary-color);
    //         &:hover {
    //             --l: 95;
    //         }
    //         &:active,
    //         &.active {
    //             background-color: var(--primary-color);
    //             color: hsla(var(--h), 7.5%, 100%, calc(var(--a) * 1%));
    //         }
    //     }

    //     &.btn-link {
    //         background: transparent;
    //         border-color: transparent;
    //         color: var(--primary-color);
    //         &:focus,
    //         &:hover,
    //         &:active,
    //         &.active {
    //             color: var(--primary-darken);
    //         }
    //     }

    //     &.btn-sm {
    //         font-size: $font-size-sm;
    //         height: $control-size-sm;
    //         padding: $control-padding-y-sm $control-padding-x-sm;
    //     }

    //     &.btn-lg {
    //         font-size: $font-size-lg;
    //         height: $control-size-lg;
    //         padding: $control-padding-y-lg $control-padding-x-lg;
    //     }

    //     &.btn-block {
    //         display: block;
    //         width: 100%;
    //     }

    //     &.btn-action {
    //         width: $control-size;
    //         padding-left: 0;
    //         padding-right: 0;
    //         &.btn-sm {
    //             width: $control-size-sm;
    //         }
    //         &.btn-lg {
    //             width: $control-size-lg;
    //         }
    //     }

    //     &.btn-clear {
    //         border: 0;
    //         height: $unit-5;
    //         line-height: $unit-4;
    //         margin-left: $unit-1;
    //         margin-right: -2px;
    //         opacity: 1;
    //         padding: $unit-h;
    //         text-decoration: none;
    //         width: $unit-5;
    //         &:focus,
    //         &:hover {
    //             opacity: 0.95;
    //         }
    //         &::before {
    //             content: "\2715";
    //         }
    //     }
    // }

    // // Button groups
    // // .btn-group {
    // //     display: inline-flex;
    // //     flex-wrap: wrap;

    // //     .btn {
    // //         flex: 1 0 auto;
    // //         &:first-child:not(:last-child) {
    // //             border-bottom-right-radius: 0;
    // //             border-top-right-radius: 0;
    // //         }
    // //         &:not(:first-child):not(:last-child) {
    // //             border-radius: 0;
    // //             margin-left: -$border-width;
    // //         }
    // //         &:last-child:not(:first-child) {
    // //             border-bottom-left-radius: 0;
    // //             border-top-left-radius: 0;
    // //             margin-left: -$border-width;
    // //         }
    // //         &:focus,
    // //         &:hover,
    // //         &:active,
    // //         &.active {
    // //             z-index: $zindex-0;
    // //         }
    // //     }

    // //     &.btn-group-block {
    // //         display: flex;

    // //         .btn {
    // //             flex: 1 0 0;
    // //         }
    // //     }
    // // }
</style>
