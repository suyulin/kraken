/*
 * Copyright (C) 2020 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#ifndef KRAKENBRIDGE_PLATFORM_VIEW_EVENT_H
#define KRAKENBRIDGE_PLATFORM_VIEW_EVENT_H

#include "bindings/jsc/DOM/event.h"
#include "bindings/jsc/host_class.h"
#include "bindings/jsc/js_context_internal.h"
#include <unordered_map>
#include <vector>

namespace kraken::binding::jsc {

    void bindPlatformViewEvent(std::unique_ptr<JSContext> &context);

    struct NativePlatformViewEvent;

    class JSPlatformViewEvent : public JSEvent {
    public:
        DEFINE_OBJECT_PROPERTY(PlatformViewEvent, 2, name, data)
        static std::unordered_map<JSContext *, JSPlatformViewEvent *> instanceMap;
        OBJECT_INSTANCE(JSPlatformViewEvent)


        JSObjectRef instanceConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount,
                                        const JSValueRef *arguments, JSValueRef *exception) override;

        JSValueRef getProperty(std::string &name, JSValueRef *exception) override;

    protected:
        JSPlatformViewEvent() = delete;
        ~JSPlatformViewEvent();
        explicit JSPlatformViewEvent(JSContext *context);
    };

    class PlatformViewEventInstance : public EventInstance {
    public:
        PlatformViewEventInstance() = delete;
        explicit PlatformViewEventInstance(JSPlatformViewEvent *jsPlatformViewEvent, NativePlatformViewEvent *nativePlatformViewEvent);
        explicit PlatformViewEventInstance(JSPlatformViewEvent *jsPlatformViewEvent, JSStringRef data);
        JSValueRef getProperty(std::string &name, JSValueRef *exception) override;
        bool setProperty(std::string &name, JSValueRef value, JSValueRef *exception) override;
        void getPropertyNames(JSPropertyNameAccumulatorRef accumulator) override;
        ~PlatformViewEventInstance() override;

        NativePlatformViewEvent *nativePlatformViewEvent;

    private:
        JSStringHolder m_name{context, ""};
        JSStringHolder m_data{context, ""};
        int64_t code;
    };

    struct NativePlatformViewEvent {
        NativePlatformViewEvent() = delete;
        explicit NativePlatformViewEvent(NativeEvent *nativeEvent) : nativeEvent(nativeEvent){};

        NativeEvent *nativeEvent;

        NativeString *name;
        NativeString *data;
    };

} // namespace kraken::binding::jsc

#endif // KRAKENBRIDGE_PLATFORM_VIEW_EVENT_H
