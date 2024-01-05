//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ EventDebouncer 2024

    function EventDebouncer (callback) {
        this.callback = callback;
        this.ticking = false;
    };
    EventDebouncer.prototype = {
        constructor: EventDebouncer,
        update:
            function() {
                this.callback && this.callback();
                this.ticking = false;
            },
        requestTick:
            function() {
                if(!this.ticking) {
                    const action = this.rafCallback || (this.rafCallback = this.update.bind(this));
                    requestAnimationFrame(action);
                    this.ticking = true;
                }
            },
        handleEvent:
            function() {
                this.requestTick();
            }
    };

/** USAGE:

    const action = f => console.log(window.pageYOffset);
    const eventReaction = new EventDebouncer(action);
    window.addEventListener('scroll', eventReaction, false);
    eventReaction.handleEvent();

    **/

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ /EventDebouncer
