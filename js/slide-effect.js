var _SlideshowTransitionC = {};
var _SlideshowTransitionCodes = {};
var _SlideshowTransitions = [];


_SlideshowTransitionC["Fade Twins"] = { $Duration: 700, $Opacity: 2, $Brother: { $Duration: 700, $Opacity: 2 } };
_SlideshowTransitionCodes["Fade Twins"] = "{$Duration:700,$Opacity:2,$Brother:{$Duration:700,$Opacity:2}}";

_SlideshowTransitionC["Rotate away"] = { $Duration: 800, $Zoom: 1, $Rotate: 0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Brother: { $Duration: 800, $Zoom: 11, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Shift: 200 } };
_SlideshowTransitionCodes["Rotate away"] = "{$Duration:800,$Zoom:1,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:11,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}}";

_SlideshowTransitionC["Rotate away acw"] = { $Duration: 800, $Zoom: 1, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Brother: { $Duration: 800, $Zoom: 11, $Rotate: 0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Shift: 200 } };
_SlideshowTransitionCodes["Rotate away acw"] = "{$Duration:800,$Zoom:1,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:11,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}}";

_SlideshowTransitionC["Rotate back"] = { $Duration: 800, $Zoom: 11, $Rotate: 0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Brother: { $Duration: 800, $Zoom: 1, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Shift: 200 } };
_SlideshowTransitionCodes["Rotate back"] = "{$Duration:800,$Zoom:11,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:1,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}}";

_SlideshowTransitionC["Rotate back acw"] = { $Duration: 800, $Zoom: 11, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Brother: { $Duration: 800, $Zoom: 1, $Rotate: 0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Shift: 200 } };
_SlideshowTransitionCodes["Rotate back acw"] = "{$Duration:800,$Zoom:11,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:1,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}}";

_SlideshowTransitionC["Switch"] = { $Duration: 800, x: 0.25, $Zoom: 1.5, $Easing: { $Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 800, x: -0.25, $Zoom: 1.5, $Easing: { $Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic }, $Opacity: 2, $ZIndex: -10 } };
_SlideshowTransitionCodes["Switch"] = "{$Duration:800,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InCubic},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:800,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InCubic},$Opacity:2,$ZIndex:-10}}";

_SlideshowTransitionC["Rotate Relay"] = { $Duration: 800, $Zoom: 11, $Rotate: 1, $Easing: { $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Brother: { $Duration: 800, $Zoom: 11, $Rotate: -1, $Easing: { $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Shift: 400 } };
_SlideshowTransitionCodes["Rotate Relay"] = "{$Duration:800,$Zoom:11,$Rotate:1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Brother:{$Duration:800,$Zoom:11,$Rotate:-1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Shift:400}}";

_SlideshowTransitionC["Rotate Relay acw"] = { $Duration: 800, $Zoom: 11, $Rotate: -1, $Easing: { $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Brother: { $Duration: 800, $Zoom: 11, $Rotate: 1, $Easing: { $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 1 }, $ZIndex: -10, $Shift: 400 } };
_SlideshowTransitionCodes["Rotate Relay acw"] = "{$Duration:800,$Zoom:11,$Rotate:-1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Brother:{$Duration:800,$Zoom:11,$Rotate:1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Shift:400}}";

_SlideshowTransitionC["Doors"] = { $Duration: 1200, x: 0.5, $Cols: 2, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InOutCubic }, $Opacity: 2, $Brother: { $Duration: 1200, $Opacity: 2 } };
_SlideshowTransitionCodes["Doors"] = "{$Duration:1200,x:0.5,$Cols:2,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InOutCubic},$Opacity:2,$Brother:{$Duration:1200,$Opacity:2}}";

_SlideshowTransitionC["Doors close"] = { $Duration: 1200, $Opacity: 2, $Brother: { $Duration: 1200, x: 0.5, $Cols: 2, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InOutCubic }, $Opacity: 2 } };
_SlideshowTransitionCodes["Doors close"] = "{$Duration:1200,$Opacity:2,$Brother:{$Duration:1200,x:0.5,$Cols:2,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InOutCubic},$Opacity:2}}";

_SlideshowTransitionC["Rotate in+ out-"] = { $Duration: 1000, x: -0.3, y: 0.5, $Zoom: 1, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4], $Zoom: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InSine, $Top: $Jease$.$InSine, $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$InSine }, $Opacity: 2, $Brother: { $Duration: 600, $Zoom: 11, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$InSine }, $Opacity: 2 } };
_SlideshowTransitionCodes["Rotate in+ out-"] = "{$Duration:1000,x:-0.3,y:0.5,$Zoom:1,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4],$Zoom:[0.6,0.4]},$Easing:{$Left:$Jease$.$InSine,$Top:$Jease$.$InSine,$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$InSine},$Opacity:2,$Brother:{$Duration:600,$Zoom:11,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$InSine},$Opacity:2}}";

_SlideshowTransitionC["Rotate in- out+"] = { $Duration: 1000, x: -0.6, y: 1, $Zoom: 11, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4], $Zoom: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InSine, $Top: $Jease$.$InSine, $Rotate: $Jease$.$InSine, $Zoom: $Jease$.$InSine }, $Opacity: 2, $Brother: { $Duration: 600, $Zoom: 1, $Rotate: -0.5, $Easing: { $Rotate: $Jease$.$InCubic, $Zoom: $Jease$.$InSine }, $Opacity: 2 } };
_SlideshowTransitionCodes["Rotate in- out+"] = "{$Duration:1000,x:-0.6,y:1,$Zoom:11,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4],$Zoom:[0.6,0.4]},$Easing:{$Left:$Jease$.$InSine,$Top:$Jease$.$InSine,$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$InSine},$Opacity:2,$Brother:{$Duration:600,$Zoom:1,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InCubic,$Zoom:$Jease$.$InSine},$Opacity:2}}";

_SlideshowTransitionC["Fly Twins"] = { $Duration: 600, x: 0.3, $During: { $Left: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 600, x: -0.3, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 } };
_SlideshowTransitionCodes["Fly Twins"] = "{$Duration:600,x:0.3,$During:{$Left:[0.6,0.4]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:600,x:-0.3,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}}";

_SlideshowTransitionC["Chess Replace TB"] = { $Duration: 1000, x: 1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 1000, x: -1, $Rows: 2, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } };
_SlideshowTransitionCodes["Chess Replace TB"] = "{$Duration:1000,x:1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1000,x:-1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}";

_SlideshowTransitionC["Chess Replace LR"] = { $Duration: 1000, y: -1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 1000, y: 1, $Cols: 2, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } };
_SlideshowTransitionCodes["Chess Replace LR"] = "{$Duration:1000,y:-1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1000,y:1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}";

_SlideshowTransitionC["Zoom back"] = { $Duration: 800, $Zoom: 11, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Brother: { $Duration: 600, $Zoom: 1.5, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Shift: -100 } };
_SlideshowTransitionCodes["Zoom back"] = "{$Duration:800,$Zoom:11,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Brother:{$Duration:600,$Zoom:1.5,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Shift:-100}}";

_SlideshowTransitionC["Zoom away"] = { $Duration: 800, $Zoom: 1.9, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Brother: { $Duration: 600, $Zoom: 11, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Shift: -100 } };
_SlideshowTransitionCodes["Zoom away"] = "{$Duration:800,$Zoom:1.9,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Brother:{$Duration:600,$Zoom:11,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Shift:-100}}";

_SlideshowTransitionC["Zoom return"] = { $Duration: 800, $Zoom: 11, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Brother: { $Duration: 600, $Zoom: 11, $Easing: { $Zoom: $Jease$.$InOutExpo }, $Opacity: 2, $Shift: -100 } };
_SlideshowTransitionCodes["Zoom return"] = "{$Duration:800,$Zoom:11,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Brother:{$Duration:600,$Zoom:11,$Easing:{$Zoom:$Jease$.$InOutExpo},$Opacity:2,$Shift:-100}}";

_SlideshowTransitionC["Shift TB"] = { $Duration: 800, y: 1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 800, y: -1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } };
_SlideshowTransitionCodes["Shift TB"] = "{$Duration:800,y:1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:800,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}";

_SlideshowTransitionC["Shift LR"] = { $Duration: 800, x: 1, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Brother: { $Duration: 800, x: -1, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2 } };
_SlideshowTransitionCodes["Shift LR"] = "{$Duration:800,x:1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:800,x:-1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}";

_SlideshowTransitionC["Return TB"] = { $Duration: 800, y: -1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 800, y: -1, $Easing: { $Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $ZIndex: -10, $Shift: -100 } };
_SlideshowTransitionCodes["Return TB"] = "{$Duration:800,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:800,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Shift:-100}}";

_SlideshowTransitionC["Return LR"] = { $Duration: 800, x: 1, $Delay: 40, $Cols: 6, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $ZIndex: -10, $Brother: { $Duration: 800, x: 1, $Delay: 40, $Cols: 6, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: { $Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear }, $Opacity: 2, $ZIndex: -10, $Shift: -60 } };
_SlideshowTransitionCodes["Return LR"] = "{$Duration:800,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:800,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Shift:-60}}";

_SlideshowTransitionC["Rotate Axis up"] = { $Duration: 800, x: 0.25, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2, $Brother: { $Duration: 800, x: -0.1, y: -0.7, $Rotate: 0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2 } };
_SlideshowTransitionCodes["Rotate Axis up"] = "{$Duration:800,x:0.25,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:800,x:-0.1,y:-0.7,$Rotate:0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}}";

_SlideshowTransitionC["Rotate Axis down"] = { $Duration: 1000, x: -0.1, y: -0.7, $Rotate: 0.1, $During: { $Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4] }, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2, $Brother: { $Duration: 1000, x: 0.2, y: 0.5, $Rotate: -0.1, $Easing: { $Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad }, $Opacity: 2 } };
_SlideshowTransitionCodes["Rotate Axis down"] = "{$Duration:1000,x:-0.1,y:-0.7,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4]},$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1000,x:0.2,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}}";

_SlideshowTransitionC["Extrude Replace"] = { $Duration: 800, x: -0.2, $Delay: 40, $Cols: 12, $During: { $Left: [0.4, 0.6] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 }, $Brother: { $Duration: 800, x: 0.2, $Delay: 40, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 1028, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Round: { $Top: 0.5 }, $Shift: -200 } };
_SlideshowTransitionCodes["Extrude Replace"] = "{$Duration:800,x:-0.2,$Delay:40,$Cols:12,$During:{$Left:[0.4,0.6]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5},$Brother:{$Duration:800,x:0.2,$Delay:40,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:1028,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Round:{$Top:0.5},$Shift:-200}}";

_SlideshowTransitionC["Extrude Return"] = { $Duration: 800, x: 0.2, $Delay: 40, $Cols: 12, $During: { $Left: [0.4, 0.6] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 }, $Brother: { $Duration: 800, x: 0.2, $Delay: 40, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 1028, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Round: { $Top: 0.5 }, $Shift: -200 } };
_SlideshowTransitionCodes["Extrude Return"] = "{$Duration:800,x:0.2,$Delay:40,$Cols:12,$During:{$Left:[0.4,0.6]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5},$Brother:{$Duration:800,x:0.2,$Delay:40,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:1028,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Round:{$Top:0.5},$Shift:-200}}";
_SlideshowTransitionC["Rotate VDouble+ in"] = { $Duration: 1200, x: -1, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate VDouble+ in"] = "{$Duration:1200,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate HDouble+ in"] = { $Duration: 1200, x: 2, y: 1, $Cols: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate HDouble+ in"] = "{$Duration:1200,x:2,y:1,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate VDouble- in"] = { $Duration: 1200, x: -0.5, y: 1, $Rows: 2, $Zoom: 1, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate VDouble- in"] = "{$Duration:1200,x:-0.5,y:1,$Rows:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate HDouble- in"] = { $Duration: 1200, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate HDouble- in"] = "{$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate VDouble+ out"] = { $Duration: 1000, x: -1, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.85 } };
_SlideshowTransitionCodes["Rotate VDouble+ out"] = "{$Duration:1000,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.85}}";

_SlideshowTransitionC["Rotate HDouble+ out"] = { $Duration: 1000, x: 4, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate HDouble+ out"] = "{$Duration:1000,x:4,y:2,$Cols:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate VDouble- out"] = { $Duration: 1000, x: -0.5, y: 1, $Rows: 2, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate VDouble- out"] = "{$Duration:1000,x:-0.5,y:1,$Rows:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate HDouble- out"] = { $Duration: 1000, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate HDouble- out"] = "{$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate VFork+ in"] = { $Duration: 1200, x: -4, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate VFork+ in"] = "{$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate HFork+ in"] = { $Duration: 1200, x: 1, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 19 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate HFork+ in"] = "{$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate VFork+ out"] = { $Duration: 1000, x: -3, y: 1, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate VFork+ out"] = "{$Duration:1000,x:-3,y:1,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate HFork+ out"] = { $Duration: 1000, x: 1, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 19 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate HFork+ out"] = "{$Duration:1000,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ in"] = { $Duration: 1200, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in"] = "{$Duration:1200,$Zoom:11,$Rotate:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in L"] = { $Duration: 1200, x: 4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in L"] = "{$Duration:1200,x:4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in R"] = { $Duration: 1200, x: -4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in R"] = "{$Duration:1200,x:-4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in T"] = { $Duration: 1200, y: 4, $Zoom: 11, $Rotate: 1, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in T"] = "{$Duration:1200,y:4,$Zoom:11,$Rotate:1,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in B"] = { $Duration: 1200, y: -4, $Zoom: 11, $Rotate: 1, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in B"] = "{$Duration:1200,y:-4,$Zoom:11,$Rotate:1,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in TL"] = { $Duration: 1200, x: 4, y: 4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in TL"] = "{$Duration:1200,x:4,y:4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in TR"] = { $Duration: 1200, x: -4, y: 4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in TR"] = "{$Duration:1200,x:-4,y:4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in BL"] = { $Duration: 1200, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in BL"] = "{$Duration:1200,x:4,y:-4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ in BR"] = { $Duration: 1200, x: -4, y: -4, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } };
_SlideshowTransitionCodes["Rotate Zoom+ in BR"] = "{$Duration:1200,x:-4,y:-4,$Zoom:11,$Rotate:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}}";

_SlideshowTransitionC["Rotate Zoom+ out"] = { $Duration: 1000, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Zoom: $Jease$.$InQuint, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out"] = "{$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InQuint,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out L"] = { $Duration: 1000, x: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out L"] = "{$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out R"] = { $Duration: 1000, x: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out R"] = "{$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out T"] = { $Duration: 1000, y: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out T"] = "{$Duration:1000,y:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out B"] = { $Duration: 1000, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out B"] = "{$Duration:1000,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out TL"] = { $Duration: 1000, x: 4, y: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out TL"] = "{$Duration:1000,x:4,y:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out TR"] = { $Duration: 1000, x: -4, y: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out TR"] = "{$Duration:1000,x:-4,y:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out BL"] = { $Duration: 1000, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out BL"] = "{$Duration:1000,x:4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom+ out BR"] = { $Duration: 1000, x: -4, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } };
_SlideshowTransitionCodes["Rotate Zoom+ out BR"] = "{$Duration:1000,x:-4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InQuint,$Top:$Jease$.$InQuint,$Zoom:$Jease$.$InQuart,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuint},$Opacity:2,$Round:{$Rotate:0.8}}";

_SlideshowTransitionC["Rotate Zoom- in"] = { $Duration: 1200, $Zoom: 1, $Rotate: 1, $During: { $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $Jease$.$Swing, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in"] = "{$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in L"] = { $Duration: 1200, x: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in L"] = "{$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in R"] = { $Duration: 1200, x: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in R"] = "{$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in T"] = { $Duration: 1200, y: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in T"] = "{$Duration:1200,y:0.6,$Zoom:1,$Rotate:1,$During:{$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in B"] = { $Duration: 1200, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in B"] = "{$Duration:1200,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in TL"] = { $Duration: 1200, x: 0.6, y: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in TL"] = "{$Duration:1200,x:0.6,y:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in TR"] = { $Duration: 1200, x: -0.6, y: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in TR"] = "{$Duration:1200,x:-0.6,y:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in BL"] = { $Duration: 1200, x: 0.6, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in BL"] = "{$Duration:1200,x:0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- in BR"] = { $Duration: 1200, x: -0.6, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- in BR"] = "{$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out"] = { $Duration: 1000, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Opacity: $Jease$.$Linear }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out"] = "{$Duration:1000,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Opacity:$Jease$.$Linear},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out L"] = { $Duration: 1000, x: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out L"] = "{$Duration:1000,x:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out R"] = { $Duration: 1000, x: -0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out R"] = "{$Duration:1000,x:-0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out T"] = { $Duration: 1000, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out T"] = "{$Duration:1000,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out B"] = { $Duration: 1000, y: -0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out B"] = "{$Duration:1000,y:-0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out TL"] = { $Duration: 1000, x: 0.5, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out TL"] = "{$Duration:1000,x:0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out TR"] = { $Duration: 1000, x: -0.5, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out TR"] = "{$Duration:1000,x:-0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out BL"] = { $Duration: 1000, x: 0.5, y: -0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out BL"] = "{$Duration:1000,x:0.5,y:-0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";

_SlideshowTransitionC["Rotate Zoom- out BR"] = { $Duration: 1000, x: -0.5, y: -0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } };
_SlideshowTransitionCodes["Rotate Zoom- out BR"] = "{$Duration:1000,x:-0.5,y:-0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}}";


_SlideshowTransitionC["Zoom VDouble+ in"] = { $Duration: 1200, y: 2, $Rows: 2, $Zoom: 11, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom VDouble+ in"] = "{$Duration:1200,y:2,$Rows:2,$Zoom:11,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom HDouble+ in"] = { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom HDouble+ in"] = "{$Duration:1200,x:4,$Cols:2,$Zoom:11,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom VDouble- in"] = { $Duration: 1200, y: 1, $Rows: 2, $Zoom: 1, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom VDouble- in"] = "{$Duration:1200,y:1,$Rows:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom HDouble- in"] = { $Duration: 1200, x: 0.5, $Cols: 2, $Zoom: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom HDouble- in"] = "{$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom VDouble+ out"] = { $Duration: 1200, y: 2, $Rows: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom VDouble+ out"] = "{$Duration:1200,y:2,$Rows:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom HDouble+ out"] = { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom HDouble+ out"] = "{$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom VDouble- out"] = { $Duration: 1200, y: 1, $Rows: 2, $Zoom: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom VDouble- out"] = "{$Duration:1200,y:1,$Rows:2,$Zoom:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom HDouble- out"] = { $Duration: 1200, x: 0.5, $Cols: 2, $Zoom: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom HDouble- out"] = "{$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in"] = { $Duration: 1000, $Zoom: 11, $Easing: { $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in"] = "{$Duration:1000,$Zoom:11,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in L"] = { $Duration: 1000, x: 4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in L"] = "{$Duration:1000,x:4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in R"] = { $Duration: 1000, x: -4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2, $Round: { $Top: 2.5 } };
_SlideshowTransitionCodes["Zoom+ in R"] = "{$Duration:1000,x:-4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2,$Round:{$Top:2.5}}";

_SlideshowTransitionC["Zoom+ in T"] = { $Duration: 1000, y: 4, $Zoom: 11, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in T"] = "{$Duration:1000,y:4,$Zoom:11,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in B"] = { $Duration: 1000, y: -4, $Zoom: 11, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in B"] = "{$Duration:1000,y:-4,$Zoom:11,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in TL"] = { $Duration: 1000, x: 4, y: 4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in TL"] = "{$Duration:1000,x:4,y:4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in TR"] = { $Duration: 1000, x: -4, y: 4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in TR"] = "{$Duration:1000,x:-4,y:4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in BL"] = { $Duration: 1000, x: 4, y: -4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in BL"] = "{$Duration:1000,x:4,y:-4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ in BR"] = { $Duration: 1000, x: -4, y: -4, $Zoom: 11, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ in BR"] = "{$Duration:1000,x:-4,y:-4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out"] = { $Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: { $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out"] = "{$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out L"] = { $Duration: 1000, x: 4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out L"] = "{$Duration:1000,x:4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out R"] = { $Duration: 1000, x: -4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out R"] = "{$Duration:1000,x:-4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out T"] = { $Duration: 1000, y: 4, $Zoom: 11, $SlideOut: true, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out T"] = "{$Duration:1000,y:4,$Zoom:11,$SlideOut:true,$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out B"] = { $Duration: 1000, y: -4, $Zoom: 11, $SlideOut: true, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out B"] = "{$Duration:1000,y:-4,$Zoom:11,$SlideOut:true,$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out TL"] = { $Duration: 1000, x: 4, y: 4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out TL"] = "{$Duration:1000,x:4,y:4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out TR"] = { $Duration: 1000, x: -4, y: 4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out TR"] = "{$Duration:1000,x:-4,y:4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out BL"] = { $Duration: 1000, x: 4, y: -4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out BL"] = "{$Duration:1000,x:4,y:-4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom+ out BR"] = { $Duration: 1000, x: -4, y: -4, $Zoom: 11, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom+ out BR"] = "{$Duration:1000,x:-4,y:-4,$Zoom:11,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- in"] = { $Duration: 1200, $Zoom: 1, $Easing: { $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in"] = "{$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in L"] = { $Duration: 1200, x: 0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in L"] = "{$Duration:1200,x:0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in R"] = { $Duration: 1200, x: -0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in R"] = "{$Duration:1200,x:-0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in T"] = { $Duration: 1200, y: 0.6, $Zoom: 1, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in T"] = "{$Duration:1200,y:0.6,$Zoom:1,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in B"] = { $Duration: 1200, y: -0.6, $Zoom: 1, $Easing: { $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in B"] = "{$Duration:1200,y:-0.6,$Zoom:1,$Easing:{$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in TL"] = { $Duration: 1200, x: 0.6, y: 0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in TL"] = "{$Duration:1200,x:0.6,y:0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in TR"] = { $Duration: 1200, x: -0.6, y: 0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in TR"] = "{$Duration:1200,x:-0.6,y:0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in BL"] = { $Duration: 1200, x: 0.6, y: -0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in BL"] = "{$Duration:1200,x:0.6,y:-0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- in BR"] = { $Duration: 1200, x: -0.6, y: -0.6, $Zoom: 1, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- in BR"] = "{$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Zoom- out"] = { $Duration: 1000, $Zoom: 1, $SlideOut: true, $Easing: { $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out"] = "{$Duration:1000,$Zoom:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out L"] = { $Duration: 1000, x: 1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out L"] = "{$Duration:1000,x:1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out R"] = { $Duration: 1000, x: -1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out R"] = "{$Duration:1000,x:-1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out T"] = { $Duration: 1000, y: 1, $Zoom: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out T"] = "{$Duration:1000,y:1,$Zoom:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out B"] = { $Duration: 1000, y: -1, $Zoom: 1, $SlideOut: true, $Easing: { $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out B"] = "{$Duration:1000,y:-1,$Zoom:1,$SlideOut:true,$Easing:{$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out TL"] = { $Duration: 1000, x: 1, y: 1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out TL"] = "{$Duration:1000,x:1,y:1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out TR"] = { $Duration: 1000, x: -1, y: 1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out TR"] = "{$Duration:1000,x:-1,y:1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out BL"] = { $Duration: 1000, x: 1, y: -1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out BL"] = "{$Duration:1000,x:1,y:-1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";

_SlideshowTransitionC["Zoom- out BR"] = { $Duration: 1000, x: -1, y: -1, $Zoom: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 };
_SlideshowTransitionCodes["Zoom- out BR"] = "{$Duration:1000,x:-1,y:-1,$Zoom:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}";


_SlideshowTransitionC["Collapse Stairs"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2049, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Stairs"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Swirl"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Swirl"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Rectangle Cross"] = { $Duration: 500, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationRectangleCross, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Rectangle Cross"] = "{$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangleCross,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Rectangle"] = { $Duration: 500, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationRectangle, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Rectangle"] = "{$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangle,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Cross"] = { $Duration: 500, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCross, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Cross"] = "{$Duration:500,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCross,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Circle"] = { $Duration: 500, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Assembly: 2049 };
_SlideshowTransitionCodes["Collapse Circle"] = "{$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Assembly:2049}";

_SlideshowTransitionC["Collapse ZigZag"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse ZigZag"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Collapse Random"] = { $Duration: 500, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad };
_SlideshowTransitionCodes["Collapse Random"] = "{$Duration:500,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad}";

_SlideshowTransitionC["Expand Stairs"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand Stairs"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand Swirl"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand Swirl"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand Rectangle Cross"] = { $Duration: 500, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationRectangleCross, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand Rectangle Cross"] = "{$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationRectangleCross,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand Rectangle"] = { $Duration: 500, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationRectangle, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand Rectangle"] = "{$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationRectangle,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand Cross"] = { $Duration: 500, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationCross, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand Cross"] = "{$Duration:500,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationCross,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand ZigZag"] = { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Clip: $Jease$.$InSine } };
_SlideshowTransitionCodes["Expand ZigZag"] = "{$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Clip:$Jease$.$InSine}}";

_SlideshowTransitionC["Expand Random"] = { $Duration: 500, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Easing: $Jease$.$InSine };
_SlideshowTransitionCodes["Expand Random"] = "{$Duration:500,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Easing:$Jease$.$InSine}";

_SlideshowTransitionC["Dominoes Stripe"] = { $Duration: 1600, y: -1, $Delay: 40, $Cols: 24, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Dominoes Stripe"] = "{$Duration:1600,y:-1,$Delay:40,$Cols:24,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}}";

_SlideshowTransitionC["Extrude out Stripe"] = { $Duration: 1000, x: -0.2, $Delay: 20, $Cols: 16, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 } };
_SlideshowTransitionCodes["Extrude out Stripe"] = "{$Duration:1000,x:-0.2,$Delay:20,$Cols:16,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}}";

_SlideshowTransitionC["Extrude in Stripe"] = { $Duration: 1000, x: 0.2, $Delay: 20, $Cols: 16, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 } };
_SlideshowTransitionCodes["Extrude in Stripe"] = "{$Duration:1000,x:0.2,$Delay:20,$Cols:16,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}}";

_SlideshowTransitionC["Horizontal Blind Stripe"] = { $Duration: 400, $Delay: 50, $Rows: 7, $Clip: 4, $Formation: $JssorSlideshowFormations$.$FormationStraight };
_SlideshowTransitionCodes["Horizontal Blind Stripe"] = "{$Duration:400,$Delay:50,$Rows:7,$Clip:4,$Formation:$JssorSlideshowFormations$.$FormationStraight}";

_SlideshowTransitionC["Vertical Blind Stripe"] = { $Duration: 400, $Delay: 50, $Cols: 10, $Clip: 2, $Formation: $JssorSlideshowFormations$.$FormationStraight };
_SlideshowTransitionCodes["Vertical Blind Stripe"] = "{$Duration:400,$Delay:50,$Cols:10,$Clip:2,$Formation:$JssorSlideshowFormations$.$FormationStraight}";

_SlideshowTransitionC["Horizontal Stripe"] = { $Duration: 400, $Rows: 6, $Clip: 4 };
_SlideshowTransitionCodes["Horizontal Stripe"] = "{$Duration:400,$Rows:6,$Clip:4}";

_SlideshowTransitionC["Vertical Stripe"] = { $Duration: 400, $Cols: 8, $Clip: 1 };
_SlideshowTransitionCodes["Vertical Stripe"] = "{$Duration:400,$Cols:8,$Clip:1}";

_SlideshowTransitionC["Horizontal Moving Stripe"] = { $Duration: 400, $Rows: 6, $Clip: 4, $Move: true };
_SlideshowTransitionCodes["Horizontal Moving Stripe"] = "{$Duration:400,$Rows:6,$Clip:4,$Move:true}";

_SlideshowTransitionC["Vertical Moving Stripe"] = { $Duration: 400, $Cols: 8, $Clip: 1, $Move: true };
_SlideshowTransitionCodes["Vertical Moving Stripe"] = "{$Duration:400,$Cols:8,$Clip:1,$Move:true}";

_SlideshowTransitionC["Horizontal Fade Stripe"] = { $Duration: 400, $Delay: 40, $Rows: 10, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Opacity: 2, $Assembly: 260 };
_SlideshowTransitionCodes["Horizontal Fade Stripe"] = "{$Duration:400,$Delay:40,$Rows:10,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2,$Assembly:260}";

_SlideshowTransitionC["Horizontal Fade Stripe Reverse"] = { $Duration: 400, $Delay: 40, $Rows: 10, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Opacity: 2 };
_SlideshowTransitionCodes["Horizontal Fade Stripe Reverse"] = "{$Duration:400,$Delay:40,$Rows:10,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2}";

_SlideshowTransitionC["Vertical Fade Stripe"] = { $Duration: 400, $Delay: 40, $Cols: 16, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Opacity: 2, $Assembly: 260 };
_SlideshowTransitionCodes["Vertical Fade Stripe"] = "{$Duration:400,$Delay:40,$Cols:16,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2,$Assembly:260}";

_SlideshowTransitionC["Vertical Fade Stripe Reverse"] = { $Duration: 400, $Delay: 40, $Cols: 16, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Opacity: 2 };
_SlideshowTransitionCodes["Vertical Fade Stripe Reverse"] = "{$Duration:400,$Delay:40,$Cols:16,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2}";

_SlideshowTransitionC["Horizontal Fly Stripe"] = { $Duration: 600, x: 1, $Delay: 50, $Rows: 8, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Horizontal Fly Stripe"] = "{$Duration:600,x:1,$Delay:50,$Rows:8,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Vertical Fly Stripe"] = { $Duration: 600, y: 1, $Delay: 50, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 513, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Vertical Fly Stripe"] = "{$Duration:600,y:1,$Delay:50,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:513,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Horizontal Chess Stripe"] = { $Duration: 600, x: -1, $Rows: 10, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Row: 3 }, $Easing: $Jease$.$InCubic };
_SlideshowTransitionCodes["Horizontal Chess Stripe"] = "{$Duration:600,x:-1,$Rows:10,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Row:3},$Easing:$Jease$.$InCubic}";

_SlideshowTransitionC["Vertical Chess Stripe"] = { $Duration: 600, y: -1, $Cols: 12, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 }, $Easing: $Jease$.$InCubic };
_SlideshowTransitionCodes["Vertical Chess Stripe"] = "{$Duration:600,y:-1,$Cols:12,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$Easing:$Jease$.$InCubic}";

_SlideshowTransitionC["Horizontal Random Fade Stripe"] = { $Duration: 600, $Delay: 40, $Rows: 10, $Opacity: 2 };
_SlideshowTransitionCodes["Horizontal Random Fade Stripe"] = "{$Duration:600,$Delay:40,$Rows:10,$Opacity:2}";

_SlideshowTransitionC["Vertical Random Fade Stripe"] = { $Duration: 600, $Delay: 40, $Cols: 16, $Opacity: 2 };
_SlideshowTransitionCodes["Vertical Random Fade Stripe"] = "{$Duration:600,$Delay:40,$Cols:16,$Opacity:2}";

_SlideshowTransitionC["Horizontal Bounce Stripe"] = { $Duration: 600, $Delay: 40, $Rows: 10, $Clip: 8, $Move: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Assembly: 264, $Easing: $Jease$.$InBounce };
_SlideshowTransitionCodes["Horizontal Bounce Stripe"] = "{$Duration:600,$Delay:40,$Rows:10,$Clip:8,$Move:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Assembly:264,$Easing:$Jease$.$InBounce}";

_SlideshowTransitionC["Vertical Bounce Stripe"] = { $Duration: 600, $Delay: 40, $Cols: 16, $Clip: 1, $Move: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Assembly: 264, $Easing: $Jease$.$InBounce };
_SlideshowTransitionCodes["Vertical Bounce Stripe"] = "{$Duration:600,$Delay:40,$Cols:16,$Clip:1,$Move:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Assembly:264,$Easing:$Jease$.$InBounce}";

_SlideshowTransitionC["Parabola Swirl in"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 264, $Easing: { $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola Swirl in"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:264,$Easing:{$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Parabola Swirl out"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 264, $Easing: { $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola Swirl out"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:264,$Easing:{$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Parabola ZigZag in"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $ChessMode: { $Row: 3 }, $Easing: { $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola ZigZag in"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$ChessMode:{$Row:3},$Easing:{$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Parabola ZigZag out"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $ChessMode: { $Row: 3 }, $Easing: { $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola ZigZag out"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$ChessMode:{$Row:3},$Easing:{$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Parabola Stairs in"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InQuart, $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola Stairs in"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InQuart,$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Parabola Stairs out"] = { $Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InQuart, $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear } };
_SlideshowTransitionCodes["Parabola Stairs out"] = "{$Duration:600,x:-1,y:1,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InQuart,$Top:$Jease$.$InQuart,$Opacity:$Jease$.$Linear}}";

_SlideshowTransitionC["Swing Inside in Stairs"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 16, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside in Stairs"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:16,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside in ZigZag"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside in ZigZag"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside in Swirl"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside in Swirl"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside in Random"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside in Random"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside in Random Chess"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 3 }, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside in Random Chess"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:3},$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside out ZigZag"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside out ZigZag"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Swing Inside out Swirl"] = { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 1.3, $Top: 2.5 } };
_SlideshowTransitionCodes["Swing Inside out Swirl"] = "{$Duration:1200,x:0.2,y:-0.1,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}";

_SlideshowTransitionC["Flutter Inside in"] = { $Duration: 1200, x: 1, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 0.8 } };
_SlideshowTransitionCodes["Flutter Inside in"] = "{$Duration:1200,x:1,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Clip:$Jease$.$InOutQuad},$Round:{$Top:0.8}}";

_SlideshowTransitionC["Flutter Inside in Wind"] = { $Duration: 1200, x: 1, y: 0.2, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Left: $Jease$.$InOutSine, $Top: $Jease$.$OutWave, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 1.3 } };
_SlideshowTransitionCodes["Flutter Inside in Wind"] = "{$Duration:1200,x:1,y:0.2,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Round:{$Top:1.3}}";

_SlideshowTransitionC["Flutter Inside in Swirl"] = { $Duration: 1200, x: 1, y: 0.2, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 2050, $Easing: { $Left: $Jease$.$InOutSine, $Top: $Jease$.$OutWave, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 1.3 } };
_SlideshowTransitionCodes["Flutter Inside in Swirl"] = "{$Duration:1200,x:1,y:0.2,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Round:{$Top:1.3}}";

_SlideshowTransitionC["Flutter Inside in Column"] = { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 150, $Cols: 12, $Opacity: 2, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 2 } };
_SlideshowTransitionCodes["Flutter Inside in Column"] = "{$Duration:1500,x:0.2,y:-0.1,$Delay:150,$Cols:12,$Opacity:2,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:2}}";

_SlideshowTransitionC["Flutter Inside out"] = { $Duration: 1200, x: 1, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 0.8 } };
_SlideshowTransitionCodes["Flutter Inside out"] = "{$Duration:1200,x:1,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Clip:$Jease$.$InOutQuad},$Round:{$Top:0.8}}";

_SlideshowTransitionC["Flutter Inside out Wind"] = { $Duration: 1200, x: 1, y: 0.2, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Left: $Jease$.$InOutSine, $Top: $Jease$.$OutWave, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 1.3 } };
_SlideshowTransitionCodes["Flutter Inside out Wind"] = "{$Duration:1200,x:1,y:0.2,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Round:{$Top:1.3}}";

_SlideshowTransitionC["Flutter Inside out Swirl"] = { $Duration: 1200, x: 1, y: 0.2, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 2050, $Easing: { $Left: $Jease$.$InOutSine, $Top: $Jease$.$OutWave, $Clip: $Jease$.$InOutQuad }, $Round: { $Top: 1.3 } };
_SlideshowTransitionCodes["Flutter Inside out Swirl"] = "{$Duration:1200,x:1,y:0.2,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Round:{$Top:1.3}}";

_SlideshowTransitionC["Flutter Inside out Column"] = { $Duration: 1800, x: 0.2, y: -0.1, $Delay: 150, $Cols: 12, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 2 } };
_SlideshowTransitionCodes["Flutter Inside out Column"] = "{$Duration:1800,x:0.2,y:-0.1,$Delay:150,$Cols:12,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:2}}";


_SlideshowTransitionC["Float Right Random"] = { $Duration: 500, x: -1, $Delay: 40, $Cols: 10, $Rows: 5, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float Right Random"] = "{$Duration:500,x:-1,$Delay:40,$Cols:10,$Rows:5,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up Random"] = { $Duration: 500, y: 1, $Delay: 40, $Cols: 10, $Rows: 5, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up Random"] = "{$Duration:500,y:1,$Delay:40,$Cols:10,$Rows:5,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up Random with Chess"] = { $Duration: 500, x: 1, y: -1, $Delay: 40, $Cols: 10, $Rows: 5, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up Random with Chess"] = "{$Duration:500,x:1,y:-1,$Delay:40,$Cols:10,$Rows:5,$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float Right ZigZag"] = { $Duration: 600, x: -1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float Right ZigZag"] = "{$Duration:600,x:-1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up ZigZag"] = { $Duration: 600, y: 1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 264, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up ZigZag"] = "{$Duration:600,y:1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:264,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up ZigZag with Chess"] = { $Duration: 600, x: -1, y: -1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 1028, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up ZigZag with Chess"] = "{$Duration:600,x:-1,y:-1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:1028,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float Right Swirl"] = { $Duration: 600, x: -1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float Right Swirl"] = "{$Duration:600,x:-1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up Swirl"] = { $Duration: 600, y: 1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 2049, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up Swirl"] = "{$Duration:600,y:1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:2049,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Float up Swirl with Chess"] = { $Duration: 600, x: 1, y: 1, $Delay: 12, $Cols: 10, $Rows: 5, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Float up Swirl with Chess"] = "{$Duration:600,x:1,y:1,$Delay:12,$Cols:10,$Rows:5,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";


_SlideshowTransitionC["Fly Right Random"] = { $Duration: 500, x: 1, $Delay: 40, $Cols: 10, $Rows: 5, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly Right Random"] = "{$Duration:500,x:1,$Delay:40,$Cols:10,$Rows:5,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up Random"] = { $Duration: 500, y: -1, $Delay: 40, $Cols: 10, $Rows: 5, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up Random"] = "{$Duration:500,y:-1,$Delay:40,$Cols:10,$Rows:5,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up Random with Chess"] = { $Duration: 600, x: -1, y: 1, $Delay: 40, $Cols: 10, $Rows: 5, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up Random with Chess"] = "{$Duration:600,x:-1,y:1,$Delay:40,$Cols:10,$Rows:5,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly Right ZigZag"] = { $Duration: 600, x: 1, $Delay: 12, $Cols: 10, $Rows: 5, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 514, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly Right ZigZag"] = "{$Duration:600,x:1,$Delay:12,$Cols:10,$Rows:5,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:514,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up ZigZag"] = { $Duration: 600, y: -1, $Delay: 12, $Cols: 10, $Rows: 5, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up ZigZag"] = "{$Duration:600,y:-1,$Delay:12,$Cols:10,$Rows:5,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up ZigZag with Chess"] = { $Duration: 600, x: 1, y: 1, $Delay: 12, $Cols: 10, $Rows: 5, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up ZigZag with Chess"] = "{$Duration:600,x:1,y:1,$Delay:12,$Cols:10,$Rows:5,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly Right Swirl"] = { $Duration: 600, x: 1, $Delay: 12, $Cols: 10, $Rows: 5, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly Right Swirl"] = "{$Duration:600,x:1,$Delay:12,$Cols:10,$Rows:5,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up Swirl"] = { $Duration: 600, y: -1, $Delay: 12, $Cols: 10, $Rows: 5, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 2049, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up Swirl"] = "{$Duration:600,y:-1,$Delay:12,$Cols:10,$Rows:5,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:2049,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Fly up Swirl with Chess"] = { $Duration: 600, x: -1, y: -1, $Delay: 12, $Cols: 10, $Rows: 5, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
_SlideshowTransitionCodes["Fly up Swirl with Chess"] = "{$Duration:600,x:-1,y:-1,$Delay:12,$Cols:10,$Rows:5,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

_SlideshowTransitionC["Dodge Dance Inside in Stairs"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside in Stairs"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside in Swirl"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside in Swirl"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside in ZigZag"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside in ZigZag"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside in Random"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside in Random"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside in Random Chess"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside in Random Chess"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside out Stairs"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.1, 0.9], $Top: [0.1, 0.9] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside out Stairs"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside out Swirl"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.1, 0.9], $Top: [0.1, 0.9] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside out Swirl"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside out ZigZag"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.1, 0.9], $Top: [0.1, 0.9] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside out ZigZag"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside out Random"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside out Random"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Dance Inside out Random Chess"] = { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } };
_SlideshowTransitionCodes["Dodge Dance Inside out Random Chess"] = "{$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}";

_SlideshowTransitionC["Dodge Inside out Stairs"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out Stairs"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out Swirl"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out Swirl"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out ZigZag"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out ZigZag"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out Random"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $SlideOut: true, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out Random"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out Random Chess"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $SlideOut: true, $Assembly: 260, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out Random Chess"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Assembly:260,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in Stairs"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in Stairs"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in Swirl"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in Swirl"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in ZigZag"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in ZigZag"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in Random"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in Random"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in Random Chess"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $Assembly: 260, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing }, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in Random Chess"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:80,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Assembly:260,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$Swing},$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in TL"] = { $Duration: 1200, x: 0.3, y: 0.3, $Delay: 60, $Zoom: 1, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in TL"] = "{$Duration:1200,x:0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in TR"] = { $Duration: 1200, x: -0.3, y: 0.3, $Delay: 60, $Zoom: 1, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in TR"] = "{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in BL"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 60, $Zoom: 1, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in BL"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside in BR"] = { $Duration: 1200, x: -0.3, y: -0.3, $Delay: 60, $Zoom: 1, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside in BR"] = "{$Duration:1200,x:-0.3,y:-0.3,$Delay:60,$Zoom:1,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out TL"] = { $Duration: 1200, x: 0.3, y: 0.3, $Delay: 60, $Zoom: 1, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out TL"] = "{$Duration:1200,x:0.3,y:0.3,$Delay:60,$Zoom:1,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out TR"] = { $Duration: 1200, x: -0.3, y: 0.3, $Delay: 60, $Zoom: 1, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out TR"] = "{$Duration:1200,x:-0.3,y:0.3,$Delay:60,$Zoom:1,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out BL"] = { $Duration: 1200, x: 0.3, y: -0.3, $Delay: 60, $Zoom: 1, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out BL"] = "{$Duration:1200,x:0.3,y:-0.3,$Delay:60,$Zoom:1,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";

_SlideshowTransitionC["Dodge Inside out BR"] = { $Duration: 1200, x: -0.3, y: -0.3, $Delay: 60, $Zoom: 1, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Opacity: $Jease$.$Linear, $Zoom: $Jease$.$Swing }, $Opacity: 2, $Round: { $Left: 0.8, $Top: 0.8 } };
_SlideshowTransitionCodes["Dodge Inside out BR"] = "{$Duration:1200,x:-0.3,y:-0.3,$Delay:60,$Zoom:1,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Opacity:$Jease$.$Linear,$Zoom:$Jease$.$Swing},$Opacity:2,$Round:{$Left:0.8,$Top:0.8}}";
_SlideshowTransitionC["Clip & Chess in"] = { $Duration: 1200, y: -1, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Top: [0.5, 0.5], $Clip: [0, 0.5] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 }, $ScaleClip: 0.5 };
_SlideshowTransitionCodes["Clip & Chess in"] = "{$Duration:1200,y:-1,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5}";

_SlideshowTransitionC["Clip & Chess out"] = { $Duration: 1200, y: -1, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Top: [0.5, 0.5], $Clip: [0, 0.5] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 }, $ScaleClip: 0.5 };
_SlideshowTransitionCodes["Clip & Chess out"] = "{$Duration:1200,y:-1,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5}";

_SlideshowTransitionC["Clip & Oblique Chess in"] = { $Duration: 1200, x: -1, y: -1, $Cols: 6, $Rows: 6, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Clip: [0, 0.2] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Clip: $Jease$.$Swing }, $ScaleClip: 0.5 };
_SlideshowTransitionCodes["Clip & Oblique Chess in"] = "{$Duration:1200,x:-1,y:-1,$Cols:6,$Rows:6,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Clip:[0,0.2]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Clip:$Jease$.$Swing},$ScaleClip:0.5}";

_SlideshowTransitionC["Clip & Oblique Chess out"] = { $Duration: 1200, x: -1, y: -1, $Cols: 6, $Rows: 6, $Opacity: 2, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Clip: [0, 0.2] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Clip: $Jease$.$Swing }, $ScaleClip: 0.5 };
_SlideshowTransitionCodes["Clip & Oblique Chess out"] = "{$Duration:1200,x:-1,y:-1,$Cols:6,$Rows:6,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Clip:[0,0.2]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Clip:$Jease$.$Swing},$ScaleClip:0.5}";

_SlideshowTransitionC["Clip & Wave in"] = { $Duration: 4000, x: -1, y: 0.45, $Delay: 80, $Cols: 12, $Opacity: 2, $Clip: 15, $During: { $Left: [0.35, 0.65], $Top: [0.35, 0.65], $Clip: [0, 0.15] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 2049, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Clip: $Jease$.$OutQuad }, $ScaleClip: 0.7, $Round: { $Top: 4 } };
_SlideshowTransitionCodes["Clip & Wave in"] = "{$Duration:4000,x:-1,y:0.45,$Delay:80,$Cols:12,$Opacity:2,$Clip:15,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.15]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Clip:$Jease$.$OutQuad},$ScaleClip:0.7,$Round:{$Top:4}}";

_SlideshowTransitionC["Clip & Wave out"] = { $Duration: 4000, x: -1, y: 0.45, $Delay: 80, $Cols: 12, $Opacity: 2, $Clip: 15, $During: { $Left: [0.35, 0.65], $Top: [0.35, 0.65], $Clip: [0, 0.15] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 2049, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Clip: $Jease$.$OutQuad }, $ScaleClip: 0.7, $Round: { $Top: 4 } };
_SlideshowTransitionCodes["Clip & Wave out"] = "{$Duration:4000,x:-1,y:0.45,$Delay:80,$Cols:12,$Opacity:2,$Clip:15,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.15]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Clip:$Jease$.$OutQuad},$ScaleClip:0.7,$Round:{$Top:4}}";

_SlideshowTransitionC["Clip & Jump in"] = { $Duration: 4000, x: -1, y: 0.7, $Delay: 80, $Cols: 12, $Opacity: 2, $Clip: 11, $Move: true, $During: { $Left: [0.35, 0.65], $Top: [0.35, 0.65], $Clip: [0, 0.1] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 2049, $Easing: { $Left: $Jease$.$OutQuad, $Top: $Jease$.$OutJump, $Clip: $Jease$.$OutQuad }, $ScaleClip: 0.7, $Round: { $Top: 4 } };
_SlideshowTransitionCodes["Clip & Jump in"] = "{$Duration:4000,x:-1,y:0.7,$Delay:80,$Cols:12,$Opacity:2,$Clip:11,$Move:true,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.1]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$Jease$.$OutQuad,$Top:$Jease$.$OutJump,$Clip:$Jease$.$OutQuad},$ScaleClip:0.7,$Round:{$Top:4}}";

_SlideshowTransitionC["Clip & Jump out"] = { $Duration: 4000, x: -1, y: 0.7, $Delay: 80, $Cols: 12, $Opacity: 2, $Clip: 11, $Move: true, $During: { $Left: [0.35, 0.65], $Top: [0.35, 0.65], $Clip: [0, 0.1] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 2049, $Easing: { $Left: $Jease$.$OutQuad, $Top: $Jease$.$OutJump, $Clip: $Jease$.$OutQuad }, $ScaleClip: 0.7, $Round: { $Top: 4 } };
_SlideshowTransitionCodes["Clip & Jump out"] = "{$Duration:4000,x:-1,y:0.7,$Delay:80,$Cols:12,$Opacity:2,$Clip:11,$Move:true,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.1]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$Jease$.$OutQuad,$Top:$Jease$.$OutJump,$Clip:$Jease$.$OutQuad},$ScaleClip:0.7,$Round:{$Top:4}}";

_SlideshowTransitionC["Wave out"] = { $Duration: 1500, y: -0.5, $Delay: 60, $Cols: 16, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: { $Top: $Jease$.$InWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out"] = "{$Duration:1500,y:-0.5,$Delay:60,$Cols:16,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Easing:{$Top:$Jease$.$InWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Eagle"] = { $Duration: 1200, y: -0.5, $Delay: 30, $Cols: 15, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Easing: { $Top: $Jease$.$InWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Eagle"] = "{$Duration:1200,y:-0.5,$Delay:30,$Cols:15,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Easing:{$Top:$Jease$.$InWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Swirl"] = { $Duration: 1200, x: -1, y: 0.5, $Delay: 30, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Swirl"] = "{$Duration:1200,x:-1,y:0.5,$Delay:30,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out ZigZag"] = { $Duration: 1500, x: -1, y: 0.5, $Delay: 60, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out ZigZag"] = "{$Duration:1500,x:-1,y:0.5,$Delay:60,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Rectangle"] = { $Duration: 1500, x: 1, y: 0.5, $Delay: 60, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationRectangle, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Rectangle"] = "{$Duration:1500,x:1,y:0.5,$Delay:60,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangle,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Circle"] = { $Duration: 1500, x: 1, y: 0.5, $Delay: 60, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Circle"] = "{$Duration:1500,x:1,y:0.5,$Delay:60,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Cross"] = { $Duration: 1500, x: 1, y: 0.5, $Delay: 60, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCross, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Cross"] = "{$Duration:1500,x:1,y:0.5,$Delay:60,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCross,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";

_SlideshowTransitionC["Wave out Rectangle Cross"] = { $Duration: 1500, x: 1, y: 0.5, $Delay: 60, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationRectangleCross, $Assembly: 260, $Easing: { $Left: $Jease$.$Linear, $Top: $Jease$.$OutWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } };
_SlideshowTransitionCodes["Wave out Rectangle Cross"] = "{$Duration:1500,x:1,y:0.5,$Delay:60,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangleCross,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutWave,$Opacity:$Jease$.$Linear},$Round:{$Top:1.5}}";


for (var transitionName in _SlideshowTransitionC) {
  var slideshowTransition = _SlideshowTransitionC[transitionName];
  _SlideshowTransitions.push(slideshowTransition);
}