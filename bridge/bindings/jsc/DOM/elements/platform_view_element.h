/*
 * Copyright (C) 2020 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#ifndef KRAKENBRIDGE_PLATFORM_VIEW_ELEMENT_H
#define KRAKENBRIDGE_PLATFORM_VIEW_ELEMENT_H

#include "bindings/jsc/DOM/element.h"
#include "bindings/jsc/js_context_internal.h"

namespace kraken::binding::jsc {

struct NativePlatformViewElement;

class JSPlatformViewElement : public JSElement {
public:
  static std::unordered_map<JSContext *, JSPlatformViewElement *> instanceMap;
  OBJECT_INSTANCE(JSPlatformViewElement)
  JSObjectRef instanceConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount,
                                  const JSValueRef *arguments, JSValueRef *exception) override;

  class PlatformViewElementInstance : public ElementInstance {
  public:
    DEFINE_OBJECT_PROPERTY(PlatformViewElement, 4, type, data, currentData, currentType)
    DEFINE_PROTOTYPE_OBJECT_PROPERTY(PlatformViewElement, 1, call)

    static JSValueRef call(JSContextRef ctx, JSObjectRef function, JSObjectRef thisObject, size_t argumentCount,
                             const JSValueRef arguments[], JSValueRef *exception);

    PlatformViewElementInstance() = delete;
    ~PlatformViewElementInstance();
    explicit PlatformViewElementInstance(JSPlatformViewElement *JSPlatformViewElement);
    JSValueRef getProperty(std::string &name, JSValueRef *exception) override;
    bool setProperty(std::string &name, JSValueRef value, JSValueRef *exception) override;
    void getPropertyNames(JSPropertyNameAccumulatorRef accumulator) override;

    NativePlatformViewElement *nativePlatformViewElement;

  private:
    JSStringHolder m_data{context, ""};
    JSStringHolder m_type{context, ""};
  };
protected:

  ~JSPlatformViewElement();
  JSPlatformViewElement() = delete;
  explicit JSPlatformViewElement(JSContext *context);

  static JSValueRef call(JSContextRef ctx, JSObjectRef function, JSObjectRef thisObject, size_t argumentCount,
                           const JSValueRef arguments[], JSValueRef *exception);

  JSFunctionHolder m_call{context, prototypeObject, this, "call", call};
};

using Call = void(*)(NativePlatformViewElement *nativePtr, NativeString *name, NativeString *params);

struct NativePlatformViewElement {
  NativePlatformViewElement() = delete;
  explicit NativePlatformViewElement(NativeElement *nativeElement) : nativeElement(nativeElement){};

  NativeElement *nativeElement;

  Call call;
};

} // namespace kraken::binding::jsc

#endif // KRAKENBRIDGE_PLATFORM_VIEW_ELEMENT_H
