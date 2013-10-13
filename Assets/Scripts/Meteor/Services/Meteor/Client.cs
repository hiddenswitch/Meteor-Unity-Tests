using System;
using Meteor;
using UnityEngine;

public static class Client
{
	public static bool IsConnected {
		get {
			return LiveData.Instance.Connected;
		}
	}

	public static Coroutine Connect(string url) {
		return LiveData.Instance.Connect (url);
	}
}


