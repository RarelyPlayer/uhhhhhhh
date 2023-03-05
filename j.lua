return function()
	for _, plr in game.Players:GetPlayers() do
		local hrp : BasePart = plr.Character:WaitForChild("HumanoidRootPart")
		
		hrp.Position += Vector3.new(0, 500, 0)
	end
end
