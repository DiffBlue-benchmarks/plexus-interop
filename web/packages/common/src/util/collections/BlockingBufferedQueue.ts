/**
 * Copyright 2017 Plexus Interop Deutsche Bank AG
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BlockingQueueBase } from "./BlockingQueue";

export class BlockingBufferedQueue<T> extends BlockingQueueBase<T> {

    constructor(
        private readonly maxBufferSize: number = 1024) {
        super();
    }

    public async enqueue(elem: T): Promise<void> {
        if (this.size() >= this.maxBufferSize) {
            return Promise.reject(`Reached max buffer size ${this.maxBufferSize}`);
        } else {
            super.enqueue(elem);
        }
    }

}