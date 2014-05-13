describe "Car" do
  describe "initialize" do
    it "should take make, model and year" do
      new_car = Car.new("Acura", "Integra", 1998)
      new_car.make.should eq("Acura")
      new_car.model.should eq("Integra")
      new_car.year.should eq(1998)
    end
  end
  describe "wheels" do
    it "should return a standard number of wheels for any car" do
      Car.wheels.should eq(4)
    end
  end
  describe "axles" do
    it "should return a standard number of axles for any car" do
      Car.axles.should eq(2)
    end
  end
end