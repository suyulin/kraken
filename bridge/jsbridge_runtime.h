//
// Created by Tylor Van on 2021/6/21.
//

#ifndef KRAKENBRIDGE_JSBRIDGE_RUNTIME_H
#define KRAKENBRIDGE_JSBRIDGE_RUNTIME_H

#include "kraken_bridge.h"
#include "dart_methods.h"
#include "foundation/logging.h"
#include "foundation/ui_task_queue.h"
#include "foundation/inspector_task_queue.h"
#include "bindings/jsc/KOM/performance.h"

#ifdef KRAKEN_ENABLE_JSA
#include "bridge_jsa.h"
#elif KRAKEN_JSC_ENGINE

#include "bridge_jsc.h"

#endif

#include <atomic>
#include <thread>

class JSBridgeRuntime {
public:
    int32_t initJSRuntimePool(int32_t isolateHash, int poolSize);

    std::atomic<bool> inited{false};
    std::atomic<int32_t> poolIndex{-1};
    int maxPoolSize = 0;
    kraken::JSBridge **contextPool;
    Screen screen;

    std::__thread_id uiThreadId;
    std::mutex bridge_runtime_mutex_;
//    std::lock_guard<std::mutex> guard(queue_mutex_);



};


#endif //KRAKENBRIDGE_JSBRIDGE_RUNTIME_H
