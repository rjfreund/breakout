import { Duck } from './Duck';
import Stage from './Stage';
import { Layer } from './Layer';

(function(){
    

    var stage = new Stage();
    var layer1 = new Layer();
    layer1.push(new Duck());
    stage.layers.push(layer1);

    stage.draw();
})();