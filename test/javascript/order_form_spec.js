require("spec_helper.js");
require("../../public/javascripts/application.js");

Screw.Unit(function(){
  describe("options showing for specific product only", function(){
    it("all 'options' fieldset are hidden on page load", function(){
      expect($('.options:visible').size()).to(equal, 0); 
    });

    describe("showing ops for one specific product", function(){
      before(function(){
        $('#product-type').val('filters').change();
      });
      it("when selecting filters as a product, filters options fieldset is showing", function(){
        expect($('fieldset.filters:visible').size()).to(equal, 1);
      });
      
      describe("when changing a product, only new options are visible", function(){
        before(function(){
         $('#product-type').val('planter').change();
        });
        it("filters options hidden", function(){
        expect($('fieldset.filters:hidden').size()).to(equal, 1);
        });
        it("planter options visible", function(){
          expect($('fieldset.planter:visible').size()).to(equal, 1);
        });
    });
    
    
    });
    
  });
  describe("testing steps", function(){
    it("#step2 is hidden on page load", function(){
      expect($('#step2:hidden').size()).to(equal, 1);
    });
    describe("after pressing 'Next'", function(){
      before(function(){
        $('input[name="formNext1"]').click(); 
      });
      after(function(){
        $('#step1').show();
        $('#step2').hide();
      });
      it("when clicking Next, #step1 gets hidden", function(){
        expect($('#step1:hidden').size()).to(equal, 1);
      });
      it("#step2 becomes visible when clicking Next", function(){
        expect($('#step2:visible').size()).to(equal, 1);
      });
    });
  });
});