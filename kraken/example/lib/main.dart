import 'package:flutter/material.dart';
import 'package:kraken/kraken.dart';
import 'package:kraken_websocket/kraken_websocket.dart';
import 'package:kraken_devtools/kraken_devtools.dart';
import 'mock_prescript.dart';
import 'dart:ui';

void main() {
  KrakenWebsocket.initialize();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kraken Browser',
      // theme: ThemeData.dark(),
      home: MyBrowser(),
    );
  }
}

class MyBrowser extends StatefulWidget {
  MyBrowser({Key? key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String? title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyBrowser> {
  bool highSize = false;

  OutlineInputBorder outlineBorder = OutlineInputBorder(
    borderSide: BorderSide(color: Colors.transparent, width: 0.0),
    borderRadius: const BorderRadius.all(
      Radius.circular(20.0),
    ),
  );

  @override
  Widget build(BuildContext context) {
    final MediaQueryData queryData = MediaQuery.of(context);
    final TextEditingController textEditingController = TextEditingController();

    Kraken? _kraken;
    AppBar appBar = AppBar(
        backgroundColor: Colors.black87,
        titleSpacing: 10.0,
        title: GestureDetector(
          child: Container(
            color: Colors.red,
            height: 40,
            child: Text("click to resize height"),
          ),
          onTap: () {
            setState(() {
              highSize = !highSize;
            });
          },
        )
      // Here we take the value from the MyHomePage object that was created by
      // the App.build method, and use it to set our appbar title.
    );

    final Size viewportSize = queryData.size;
    _kraken = Kraken(
      viewportWidth: viewportSize.width - queryData.padding.horizontal,
      viewportHeight: viewportSize.height - appBar.preferredSize.height - (highSize == true ? 10 : 40) - queryData.padding.vertical,
      onRuntimeReady: onJsBundleLoad,
      // bundleURL: 'http://30.77.74.135:3000/build/demo.init.js',
      bundlePath: 'assets/bundle.js',
      devToolsService: ChromeDevToolsService(),
    );
    return Scaffold(
        appBar: appBar,
        body: Align(
            alignment: Alignment.topCenter,
            // Center is a layout widget. It takes a single child and positions it
            // in the middle of the parent.
            child: _kraken
        ));
  }
}
