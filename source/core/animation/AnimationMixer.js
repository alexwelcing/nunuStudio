"use strict";

THREE.AnimationMixer.prototype.setTime = function(time)
{
	this.time = time;

	for(var i = 0; i < this._actions.length; i++)
	{
		this._actions[i].time = time;
	}

	this.update(0);
};

THREE.AnimationMixer.prototype.pause = function()
{
	//TODO <ADD CODE HERE>
};
