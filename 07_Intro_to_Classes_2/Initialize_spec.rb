describe "Car" do
  describe "initialize" do
    it "should take make, model and year" do
      new_car = Car.new("Acura", "Integra", 1998)
      new_car.make.should eq("Acura")
      new_car.model.should eq("Integra")
      new_car.year.should eq(1998)
    end
  end
end