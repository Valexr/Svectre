<script>
    export let img = {
        src: "img/osx-el-capitan.jpg",
    };
</script>

<div class="card deps card-bordered">
    <div class="card-image">
        <img src={img.src} class="img-responsive" alt="osx-el-capitan.jpg" />
    </div>
    <div class="card-header">
        <div class="card-title h5"><slot name="title" /></div>
        <div class="card-subtitle"><slot name="subtitle" /></div>
    </div>
    <div class="card-body"><slot name="body" /></div>
    <div class="card-footer">
        <slot name="footer">
            <button class="btn btn-solid btn-primary btn-block">
                + action
            </button>
        </slot>
    </div>
</div>

<style lang="scss">
    @import "../../scss/_variables";
    @import "../../scss/_mixins";
    // Cards
    .card {
        // background: hsla(
        //     var(--h),
        //     calc(var(--s) * 1%),
        //     calc(var(--l) * 1%),
        //     calc(var(--a) * 1%)
        // );
        border-radius: $border-radius;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &.card-bordered {
            border-width: $border-width;
            border-style: solid;
            // border-color: $border-color;
        }

        .card-header,
        .card-body,
        .card-footer {
            padding: $layout-spacing-lg;
            padding-bottom: 0;

            &:last-child {
                padding-bottom: $layout-spacing-lg;
            }
        }

        .card-body {
            flex: 1 1 auto;
        }

        .card-image {
            padding-top: $layout-spacing-lg;

            &:first-child {
                padding-top: 0;

                //     img {
                //         border-top-left-radius: $border-radius;
                //         border-top-right-radius: $border-radius;
                //     }
                // }

                // &:last-child {
                //     img {
                //         border-bottom-left-radius: $border-radius;
                //         border-bottom-right-radius: $border-radius;
                //     }
            }
        }
    }
</style>
