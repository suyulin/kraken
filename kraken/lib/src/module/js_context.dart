class JSContext {
  String url = 'unknown';
  String id = '-1';

  JSContext(String? url, String? id, [dynamic args]) {
    this.url = url ?? 'unknown';
    this.id = id ?? '-1';
  }

  Map toMap() => {
        'url': url,
        'id': id,
      };
}
