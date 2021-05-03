/*
 * Copyright (C) 2020 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "platform_view_element.h"

namespace kraken::binding::jsc {

std::unordered_map<JSContext *, JSPlatformViewElement *> JSPlatformViewElement::instanceMap{};

JSPlatformViewElement::~JSPlatformViewElement() {
  instanceMap.erase(context);
}

JSPlatformViewElement::JSPlatformViewElement(JSContext *context) : JSElement(context) {}
JSObjectRef JSPlatformViewElement::instanceConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount,
                                                 const JSValueRef *arguments, JSValueRef *exception) {
  auto instance = new PlatformViewElementInstance(this);
  return instance->object;
}

JSPlatformViewElement::PlatformViewElementInstance::PlatformViewElementInstance(JSPlatformViewElement *jsAnchorElement)
  : ElementInstance(jsAnchorElement, "platform-view", false), nativePlatformViewElement(new NativePlatformViewElement(nativeElement)) {
  std::string tagName = "platform-view";
  NativeString args_01{};
  buildUICommandArgs(tagName, args_01);

  foundation::UICommandTaskMessageQueue::instance(context->getContextId())
      ->registerCommand(eventTargetId, UICommand::createElement, args_01, nativePlatformViewElement);
}

JSValueRef JSPlatformViewElement::call(JSContextRef ctx, JSObjectRef function, JSObjectRef thisObject,
                                                      size_t argumentCount, const JSValueRef *arguments,
                                                      JSValueRef *exception) {
    NativeString name{};
    NativeString paramsJson{};

    if (argumentCount < 1) {
        throwJSError(ctx, "Failed to execute call() on PlatformViewElement: more than 1 arguments required but got 0.", exception);
        return nullptr;
    }

    JSStringRef nameStringRefMethod = JSValueToStringCopy(ctx, arguments[0], exception);
    name.string = JSStringGetCharactersPtr(nameStringRefMethod);
    name.length = JSStringGetLength(nameStringRefMethod);

    if (argumentCount > 1) {
        JSStringRef nameStringRefArgs = JSValueToStringCopy(ctx, arguments[1], exception);
        paramsJson.string = JSStringGetCharactersPtr(nameStringRefArgs);
        paramsJson.length = JSStringGetLength(nameStringRefArgs);
    }

    auto elementInstance = reinterpret_cast<JSPlatformViewElement::PlatformViewElementInstance *>(JSObjectGetPrivate(thisObject));
    getDartMethod()->flushUICommand();
    if (elementInstance->nativePlatformViewElement->call == nullptr) {
        KRAKEN_LOG(ERROR) << "Failed to execute call(): dart method is nullptr.";
        return nullptr;
    }
    elementInstance->nativePlatformViewElement->call(elementInstance->nativePlatformViewElement, &name, &paramsJson);
    return nullptr;
}


JSValueRef JSPlatformViewElement::PlatformViewElementInstance::getProperty(std::string &name, JSValueRef *exception) {
  auto propertyMap = getPlatformViewElementPropertyMap();
  auto prototypePropertyMap = getPlatformViewElementPrototypePropertyMap();
  JSStringHolder nameStringHolder = JSStringHolder(context, name);
  if (prototypePropertyMap.count(name) > 0) {
    return JSObjectGetProperty(ctx, prototype<JSPlatformViewElement>()->prototypeObject, nameStringHolder.getString(), exception);
  };

  if (propertyMap.count(name) > 0) {
    auto property = propertyMap[name];
      switch (property) {
          case PlatformViewElementProperty::type:
          case PlatformViewElementProperty::currentType: {
              return m_type.makeString();
          }
          case PlatformViewElementProperty::data:
          case PlatformViewElementProperty::currentData: {
              return m_data.makeString();
          }
      }
  }

  return ElementInstance::getProperty(name, exception);
}

bool JSPlatformViewElement::PlatformViewElementInstance::setProperty(std::string &name, JSValueRef value, JSValueRef *exception) {
  auto propertyMap = getPlatformViewElementPropertyMap();
  auto prototypePropertyMap = getPlatformViewElementPrototypePropertyMap();
  JSStringHolder nameStringHolder = JSStringHolder(context, name);

  if (prototypePropertyMap.count(name) > 0) {
    return JSObjectGetProperty(ctx, prototype<JSPlatformViewElement>()->prototypeObject, nameStringHolder.getString(), exception);
  };

  if (propertyMap.count(name) > 0) {
    auto property = propertyMap[name];
    switch (property) {
    case PlatformViewElementProperty::data: {
      JSStringRef dataStringRef = JSValueToStringCopy(_hostClass->ctx, value, exception);

      m_data.setString(dataStringRef);

      NativeString args_01{};
      NativeString args_02{};

      buildUICommandArgs(name, dataStringRef, args_01, args_02);
      foundation::UICommandTaskMessageQueue::instance(_hostClass->contextId)
        ->registerCommand(eventTargetId,UICommand::setProperty, args_01, args_02, nullptr);
      break;
    }
    case PlatformViewElementProperty::type: {
      JSStringRef typeStringRef = JSValueToStringCopy(_hostClass->ctx, value, exception);
      m_type.setString(typeStringRef);

      NativeString args_01{};
      NativeString args_02{};

      buildUICommandArgs(name, typeStringRef, args_01, args_02);
      foundation::UICommandTaskMessageQueue::instance(_hostClass->contextId)
        ->registerCommand(eventTargetId,UICommand::setProperty, args_01, args_02, nullptr);
      break;
    }
    default:
      break;
    }
    return true;
  } else {
    return ElementInstance::setProperty(name, value, exception);
  }
}

void JSPlatformViewElement::PlatformViewElementInstance::getPropertyNames(JSPropertyNameAccumulatorRef accumulator) {
  ElementInstance::getPropertyNames(accumulator);

  for (auto &property : getPlatformViewElementPropertyNames()) {
    JSPropertyNameAccumulatorAddName(accumulator, property);
  }

  for (auto &property : getPlatformViewElementPrototypePropertyNames()) {
    JSPropertyNameAccumulatorAddName(accumulator, property);
  }
}

JSPlatformViewElement::PlatformViewElementInstance::~PlatformViewElementInstance() {
  ::foundation::UICommandCallbackQueue::instance()->registerCallback([](void *ptr) {
    delete reinterpret_cast<NativePlatformViewElement *>(ptr);
  }, nativePlatformViewElement);
}

} // namespace kraken::binding::jsc
