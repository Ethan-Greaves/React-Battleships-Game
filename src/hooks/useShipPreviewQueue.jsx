import { useState } from 'react';
import Queue from '../classes/Queue/queue';

const UseShipPreviewQueue = () => {
    const defaultShipPreviewQueue = new Queue();

    defaultShipPreviewQueue.enqueue(5);
    defaultShipPreviewQueue.enqueue(4);
    defaultShipPreviewQueue.enqueue(3);
    defaultShipPreviewQueue.enqueue(3);
    defaultShipPreviewQueue.enqueue(2);

    const [shipPreviewQueue, setShipPreviewQueue] = useState(defaultShipPreviewQueue);
	return [shipPreviewQueue, setShipPreviewQueue, defaultShipPreviewQueue];
};

export default UseShipPreviewQueue;
