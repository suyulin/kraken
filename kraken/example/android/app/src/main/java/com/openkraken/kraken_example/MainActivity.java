package com.openkraken.kraken_example;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.openkraken.kraken.Kraken;

import io.flutter.embedding.android.FlutterActivity;

public class MainActivity extends FlutterActivity {

  private static int sAutoJump = 0;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    TextView textView = new TextView(this);
    textView.setTextColor(Color.BLUE);
    textView.setBackgroundColor(Color.RED);
    textView.setText("Jump");
    addContentView(textView, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));
    textView.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Intent intent = new Intent();
        intent.setClass(MainActivity.this, FlutterActivity.class);
        startActivity(intent);
      }
    });

    if(sAutoJump< 3) {
      new Handler(getMainLooper()).postDelayed(new Runnable() {
        @Override
        public void run() {
          Intent intent = new Intent();
          intent.setClass(MainActivity.this, FlutterActivity.class);
          startActivity(intent);
          sAutoJump++;
        }
      }, 5000);
    }
  }


}
