class JSContext {
  String url;
  String id;

  JSContext(String url, String id, [dynamic args]) {
    this.url = url;
    this.id = id;
  }

  Map toMap() => {
        "url": url,
        "id": id,
      };
}
