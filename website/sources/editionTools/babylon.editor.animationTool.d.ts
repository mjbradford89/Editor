declare module BABYLON.EDITOR {
    class AnimationTool extends AbstractDatTool {
        tab: string;
        private _animationSpeed;
        private _loopAnimation;
        private _impostor;
        private _mass;
        private _friction;
        private _restitution;
        /**
        * Constructor
        * @param editionTool: edition tool instance
        */
        constructor(editionTool: EditionTool);
        isObjectSupported(object: any): boolean;
        createUI(): void;
        update(): boolean;
        private _editAnimations();
        private _playAnimations();
        private _playSkeletonAnimations();
        private _openActionsBuilder();
    }
}
