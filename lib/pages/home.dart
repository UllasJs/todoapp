import 'package:flutter/material.dart';

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ToDo App'),
        leading: Padding(
          padding: EdgeInsets.symmetric(horizontal: 15),
          child: Icon(Icons.search, color: Colors.white),
        ),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.menu),
            onPressed: () {},
          ),
        ],
        leadingWidth: 30,
        automaticallyImplyLeading: true,
        centerTitle: true,
        backgroundColor: Colors.black,
        elevation: 0.0,
      ),
      body: Container(),
    );
  }
}
