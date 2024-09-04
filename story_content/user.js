function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ksldqRMgKi":
        Script1();
        break;
      case "5hnN8chRblu":
        Script2();
        break;
      case "6puInvafIKh":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('64EmLDw5dCx');
const duration = 750;
const easing = 'ease-out';
const id = '5xIDKukRzOj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('64EmLDw5dCx');
const duration = 750;
const easing = 'ease-out';
const id = '5xIDKukRzOj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  var player = GetPlayer();
var volumeCount = player.GetVar(‘volumeCount’)
Audio.setMasterVolume(volumeCount);
}

};
